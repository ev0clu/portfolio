export const navConfig = ["Home", "About", "Projects", "Contact"] as const;

export type TNavConfig = (typeof navConfig)[number];
