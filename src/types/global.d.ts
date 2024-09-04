export {};

declare global {
  interface Window {
    onloadRecaptchaCallback?: () => void;
  }
}
