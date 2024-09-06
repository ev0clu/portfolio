export const siteConfig = {
  name: "Laszlo Kis Portfolio",
  url: `https://${process.env.NEXT_PUBLIC_PRODUCTION_HOST}`,
  ogImage: `https://${process.env.NEXT_PUBLIC_PRODUCTION_HOST}/og.jpg`,
  description: "Laszlo Kis full stack developer portfolio website",
  links: {
    linkedin: "https://www.linkedin.com/in/laszlo-kis-1932a1276",
    github: "https://github.com/ev0clu",
  },
};

export type TSiteConfig = typeof siteConfig;
