import { useEffect, useRef } from "react";

interface RecaptchaProps {
  siteKey: string;
  onVerify: (token: string) => void;
  token: string | null;
}

const Recaptcha: React.FC<RecaptchaProps> = ({ siteKey, onVerify, token }) => {
  const recaptchaRef = useRef<HTMLDivElement>(null);

  if (recaptchaRef.current && token === "") {
    grecaptcha.reset(Number(recaptchaRef.current.id));
  }

  useEffect(() => {
    // Load the reCAPTCHA script if not already present
    if (!document.querySelector("#recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    window.onloadRecaptchaCallback = function () {
      if (recaptchaRef.current) {
        grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
          callback: onVerify,
        });
      }
    };

    return () => {
      delete window.onloadRecaptchaCallback;
    };
  }, []);

  return <div ref={recaptchaRef}></div>;
};

export default Recaptcha;
