import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface EmailContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

const EmailContactTemplate = ({
  name,
  email,
  message,
}: EmailContactTemplateProps) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>You have received a new email via Portfolio page</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading as="h2">You have received a new email.</Heading>
          <Text style={paragraph.text}>Name</Text>
          <Text style={paragraph.contact}>{name}</Text>
          <Text style={paragraph.text}>Email</Text>
          <Text style={paragraph.contact}>{email}</Text>
          <Text style={paragraph.text}>Message</Text>
          <Text style={paragraph.contact}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailContactTemplate;

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
  text: {
    margin: "16px 0 0 0",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "26px",
  },
  contact: {
    margin: 0,
    fontSize: "16px",
    lineHeight: "26px",
  },
};
