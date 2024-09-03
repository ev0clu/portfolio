import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";

interface EmailAutoReplyTemplateProps {
  name: string;
  email: string;
}

const EmailAutoReplyTemplate = ({
  name,
  email,
}: EmailAutoReplyTemplateProps) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_PRODUCTION_HOST;

  return (
    <Html lang="en">
      <Head />
      <Preview>
        Thank you for reaching out! I received your message and will get back to
        you soon.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Dear {name},</Text>
          <Text style={paragraph}>
            Thank you for reaching out! I received your message and will get
            back to you soon.
          </Text>
          <Text style={signature.paragraph}>Best regards,</Text>
          <Text style={signature.name}>Laszlo Kis</Text>
          {/*  1x1 pixel tracking image */}
          <Img
            src={`https://${baseUrl}/api/track-email?email=${email}`}
            alt="track"
            width="1"
            height="1"
            style={{ display: "none" }}
          />
        </Container>
      </Body>
    </Html>
  );
};

export default EmailAutoReplyTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const signature = {
  paragraph: { margin: 0, fontSize: "16px" },
  name: {
    margin: 0,
    fontSize: "16px",
    color: "#10b981",
    fontWeight: "500",
  },
};
