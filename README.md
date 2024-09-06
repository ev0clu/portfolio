# **Portfolio**

My personal portfolio project has built with Next.js, Typescript and TailwindCSS.

### Demo: [Link](https://laszlokis.site)

## Features

- Google reCAPTCHA v3 used to help to protect the sites from fraudulent activities, spam, and abuse
- Scrolling to target feature is added to header navigations
- Intersection observer used to detect view area
- Resend used for SMTP email sending
- React email used for email template
- Next.js with server actions used for SEO optimalization
- React context used for state management
- React Hook form used to create forms
- Zod used for form validation
- Tailwind CSS used for styling
- Framer motion used for animations
- Toast notification use to improve UX
- Responsive design for mobile and desktop as well
- Self-hosted deployement in Docker container
- Nginx Proxy Manager uses as reverse proxy with Let's encrypt for SSL.
- Cloudflare uses as DNS provider and protecting traffic.
- Self-hosted Plausible uses for analytics

## How to run from local repository

1. Clone the repository
2. Create `.env.local` file and add enviromental variables according to the `.env.example`:

```
RESEND_API_KEY=
NEXT_PUBLIC_GOOGLE_RECAPTHCA_SITE_KEY=
GOOGLE_RECAPTHCA_SECRET_KEY=
NEXT_PUBLIC_PRODUCTION_HOST=https://example.com
NEXT_PUBLIC_PLAUSIBLE_HOST=https://plausible.example.com
```

Rename `Dockerfile.example` to `Dockerfile` and add the same variables into the **ENV** section with the correct _values_ and _keys_

## How to self-hosted with Docker container in the same machine

0. Docker setup:

- Install [Docker](https://docs.docker.com/get-started/get-docker/) on your machine.
- You need to have the `Dockerfile` in the root folder with the same content as it is in this repository already (add **ENV** according to the previous section). Need to update the `next.config.mjs` same as it is in this repository also.

1. Build your container: `docker build -t nextjs-portfolio .`
2. Run your container: `docker run -p 3000:3000 nextjs-portfolio`

## How to self-hosted with Docker container in Machine-B

0. Docker setup:

- Install [Docker](https://docs.docker.com/get-started/get-docker/) on your machine.
- You need to have the `Dockerfile` in the root folder with the same content as it is in this repository already (add **ENV** according to the previous section). Need to update the `next.config.mjs` same as it is in this repository also.

1. Build your container: `docker build -t nextjs-portfolio .`
2. Save docker image into **\*.tar** file in the project root folder: `docker save -o nextjs-portfolio.tar nextjs-portfolio`
3. Copy **\*.tar** file into the Machine-B `scp /path-to-tar-file/nextjs-portfolio.tar machine-b-username@192.xxx.x.xx:/path-to-machine-b-folder/`
4. Load docker container: `docker load -i /path-to-machine-b-folder/nextjs-portfolio.tar`<br/>
   You can check the does the image exist: `docker images`
5. Run your container: `docker run -d --name nextjs-portfolio -p 3000:3000 nextjs-portfolio`<br/>
6. Next.js server running at `http://localhost:3000/`
7. Redeploy new version:<br/>

- Remove previous container. Run `docker container ls` than `docker container rm -f <container-name>`
- Remove previous image. Run `docker image ls` than `docker image rm -f <image-name>`

### Useful links and informations

- Next.js standalone build for Docker:
  - [Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files)
  - [GitHub](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- Scroll to target:
  - [ReactHustle](https://reacthustle.com/blog/nextjs-scroll-to-element)
- Cubic Bezier:
  - [CSS Portal](https://www.cssportal.com/css-cubic-bezier-generator/)
  - [Cubic Bezier site](https://cubic-bezier.com/)
- React Hook Form usage with UI component needs to has `ref={null}` property to avoid ref warning:
  - [Stackoverflow](https://stackoverflow.com/questions/67877887/react-hook-form-v7-function-components-cannot-be-given-refs-attempts-to-access)
  - [GitHub](https://github.com/react-hook-form/react-hook-form/issues/3411)
- Self-hosted with cloudflare dns:
  - [Cloudflare Archive](https://community.cloudflare.com/tdeprecated-redirect-www-example-com-to-example-com/78347)
  - [Cloudflare test redirection](https://community.cloudflare.com/t/redirect-to-non-www/596929)
- Self-hosted analytics:
  - Plausible (Community Edition)
    - [Plausible](https://plausible.io/)
    - [Github](https://github.com/plausible/community-edition/)
  - Umami
    - [umami](https://umami.is/)
    - [Github](https://github.com/umami-software/umami)

### Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/)
- [Sonner toast](https://sonner.emilkowal.ski/)
- [Lucide icons](https://lucide.dev/)
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
- [React Hook Form](https://react-hook-form.com/)
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- [Zod](https://zod.dev/)
- [Resend](https://resend.com/)
- [React email](https://react.email/)
- [Google reCAPTCHA v3](https://www.google.com/recaptcha/about/)

### Layout

![layout picture](https://github.com/ev0clu/portfolio/blob/main/public/og.jpg?raw=true)<br>
