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
