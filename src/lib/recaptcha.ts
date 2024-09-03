export const getReCaptchaToken = async (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    return grecaptcha.ready(async () => {
      try {
        const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY;
        if (!siteKey) {
          resolve(null);
          return;
        }

        const token = await grecaptcha.execute(siteKey, { action: "contact" });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  });
};

export const verifyReCaptchaToken = async (token: string) => {
  const secretKey = process.env.GOOGLE_RECAPTHCA_SECRET_KEY;
  if (!secretKey) {
    throw new Error("No secret key found");
  }
  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const response = await fetch(url, { method: "POST" });
  const reCaptchaData: TReCaptchaData = await response.json();

  if (!response.ok) return null;

  return reCaptchaData;
};

type TReCaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      "error-codes": ErrorCodes[];
    };

type ErrorCodes =
  | "missing-input-secret"
  | "invalid-input-secret"
  | "missing-input-response"
  | "invalid-input-response"
  | "bad-request"
  | "timeout-or-duplicate";
