import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProvider } from "@/components/ScrollProvider";
import { siteConfig } from "@/config/site";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Javascript",
    "Typescript",
    "Tailwind CSS",
    "Shadcn UI",
    "MaterialUI",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Prisma ORM",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Chart",
    "Fullstack",
    "Full stack",
    "Frontend",
    "Web developer",
    "Developer",
  ],
  authors: [
    {
      name: "Laszlo Kis",
      url: siteConfig.url,
    },
  ],
  creator: "Laszlo Kis",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1450,
        height: 950,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProvider>
            <div className="container relative flex min-h-screen flex-col">
              {children}
            </div>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
