"use server";

import { Resend } from "resend";
import {
  contactFormSchema,
  TContactFormSchema,
} from "@/lib/validations/contactFormSchema";
import EmailContactTemplate from "@/components/EmailContactTemplate";
import EmailAutoReplyTemplate from "@/components/EmailAutoReplyTemplate";
import { verifyReCaptchaToken } from "@/lib/recaptcha";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactAction = async (
  token: string,
  data: TContactFormSchema,
): Promise<{ success: boolean; message: string | any }> => {
  try {
    const reCaptchaData = await verifyReCaptchaToken(token);

    if (!reCaptchaData) {
      return {
        success: false,
        message: "reCAPTCHA verification has failed",
      };
    }

    if (!reCaptchaData.success) {
      return {
        success: false,
        message: reCaptchaData["error-codes"],
      };
    }

    if (reCaptchaData.score < 0.5) {
      return {
        success: false,
        message: "reCAPTCHA has failed. Try again!",
      };
    }

    const { name, email, message } = contactFormSchema.parse(data);

    const { error: contactError } = await resend.emails.send({
      /* from: "Laszlo Kis <info@resend.dev>",
            to: ["ev0clu@gmail.com"],*/
      from: "Laszlo Kis <info@laszlokis.site>",
      to: ["laszlo.peter.kis@gmail.com"],
      subject: `New Portfolio contact: ${name}`,
      react: EmailContactTemplate({
        name,
        email,
        message,
      }) as React.ReactElement,
    });

    if (contactError) {
      return {
        success: false,
        message: contactError.message,
      };
    }

    const { error: replyError } = await resend.emails.send({
      /*  from: "Laszlo Kis <info@resend.dev>",
          to: ["ev0clu@gmail.com"],*/
      from: "Laszlo Kis <info@laszlokis.site>",
      to: [`${email}`],
      subject: `Your email was received`,
      react: EmailAutoReplyTemplate({ name, email }) as React.ReactElement,
    });

    if (replyError) {
      return {
        success: false,
        message: replyError.message,
      };
    }

    return {
      success: true,
      message: "Email has been sent successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};
