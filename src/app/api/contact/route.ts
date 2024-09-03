import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contactFormSchema";
import EmailContactTemplate from "@/components/EmailContactTemplate";
import EmailAutoReplyTemplate from "@/components/EmailAutoReplyTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const { name, email, message } = contactFormSchema.parse(body);

    // Validation with safeParse
    /* const validation = userSchema.safeParse(body);
        if (!validation.success) {
          NextResponse.json(validation.error.format(), { status: 400 });
        }*/

    /* const { data, error } = await resend.emails.send({
      //from: "Acme <onboarding@resend.dev>",
      from: "Laszlo Kis <laszlokis@resend.dev>",
      to: ["ev0clu@gmail.com"],
      subject: "template",
      html: "test messeage",
    });
    console.log(error, data);
    return NextResponse.json(
      {
        message: error,
      },
      {
        status: 400,
      },
    );*/

    const { data: contactData, error: contactError } = await resend.emails.send(
      {
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
      },
    );

    if (contactError) {
      return NextResponse.json(
        {
          message: contactError.message,
        },
        {
          status: 400,
        },
      );
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
      return NextResponse.json(
        {
          message: replyError.message,
        },
        {
          status: 400,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Email has been sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 },
    );
  }
}
