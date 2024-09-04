"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  contactFormSchema,
  TContactFormSchema,
} from "@/lib/validations/contactFormSchema";
import Section from "../Section/Section";
import SectionTitle from "../Section/SectionTitle";
import Recaptcha from "./Recaptcha";
import { LoaderCircle } from "lucide-react";
import { contactAction } from "@/app/actions/action";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token);
  };

  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (recaptchaToken) {
      form.reset({
        name: "",
        email: "",
        message: "",
      });
      setRecaptchaToken("");
    }
  }, [recaptchaToken, form, form.formState.isSubmitSuccessful]);

  const onSubmit = async (data: TContactFormSchema) => {
    try {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA");
        return;
      }

      setIsSubmitting(true);

      const response = await contactAction(recaptchaToken, data);

      if (response.success) {
        setIsSubmitting(false);
        toast.success(response.message);
      } else {
        setIsSubmitting(false);
        toast.error(response.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      setRecaptchaToken("");
      toast.error("An unexpected error is occured");
    }
  };

  return (
    <Section id="Contact">
      <SectionTitle>Contact</SectionTitle>
      <p className="pb-8 text-center text-muted-foreground">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-full space-y-4 md:min-w-[70%] lg:min-w-[50%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="example@mail.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your message here."
                    className="resize-none"
                    rows={10}
                    disabled={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-center gap-10">
            <Button type="submit" disabled={isSubmitting}>
              Submit
              {isSubmitting && (
                <LoaderCircle
                  strokeWidth={2.5}
                  className="ml-2 h-4 w-4 animate-spin text-emerald-500"
                />
              )}
            </Button>
            <Recaptcha
              siteKey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY}`}
              onVerify={handleRecaptchaVerify}
              token={recaptchaToken}
            />
          </div>
        </form>
      </Form>
    </Section>
  );
};

export default Contact;
