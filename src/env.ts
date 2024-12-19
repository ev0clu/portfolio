import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    RESEND_API_KEY: z.string().trim().min(1),
    GOOGLE_RECAPTHCA_SECRET_KEY: z.string().trim().min(1),
  },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "test", "production"]),
    NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY: z.string().trim().min(1),
    NEXT_PUBLIC_PRODUCTION_HOST: z
      .string()
      .trim()
      .min(1)
      .refine(
        (url) => !url.startsWith("http") && !url.startsWith("https"),
        "Invalid URL format. Valid example: johndoe.com",
      ),
    NEXT_PUBLIC_PLAUSIBLE_HOST: z
      .string()
      .trim()
      .min(1)
      .refine(
        (url) => url.startsWith("https"),
        "Invalid URL format. Valid example: https://plausible.johndoe.com",
      ),
    NEXT_PUBLIC_GOOGLE_DRIVE_URL: z
      .string()
      .trim()
      .min(1)
      .refine(
        (url) => url.startsWith("https://drive.google.com/file"),
        "Invalid URL format. Valid example: https://drive.google.com/file/d/1B1EHejiYu-OvzdSL1/view?usp=sharing",
      ),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    GOOGLE_RECAPTHCA_SECRET_KEY: process.env.GOOGLE_RECAPTHCA_SECRET_KEY,
    NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY,
    NEXT_PUBLIC_PRODUCTION_HOST: process.env.NEXT_PUBLIC_PRODUCTION_HOST,
    NEXT_PUBLIC_PLAUSIBLE_HOST: process.env.NEXT_PUBLIC_PLAUSIBLE_HOST,
    NEXT_PUBLIC_GOOGLE_DRIVE_URL: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION || process.env.NODE_ENV === "test",
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
