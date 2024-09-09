export const hostingConfig = [
  "SELF-HOSTED",
  "DOCKER",
  "NGINX PROXY MANAGER",
  "PLAUSIBLE ANALYTICS",
] as const;

export type THostingConfig = (typeof hostingConfig)[number];
