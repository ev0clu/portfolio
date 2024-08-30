export const projects = [
  {
    name: "Food Ordering App",
    description:
      "The app allows users to log in with previously registered credentials or with Google provider in order to order foods. After the checkout, stripe payment test mode let to test the payment process. New category and food can be add dynamically into the database with admin role. User profile can be updated. Filtering option is available for foods.",
    techStack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "ShadcnUI",
      "React Hook Form",
      "Zod",
      "Prisma ORM",
      "MongoDB",
      "Next-Auth",
      "Zustand",
      "Stripe",
      "Resend",
    ],
    img: "/projects/food-ordering-app.png",
    github: "https://github.com/ev0clu/food-ordering-app/",
    demo: "https://food-ordering-app-chi-nine.vercel.app/",
  },
  {
    name: "Task Manager App",
    description:
      "A trello clone task manager app has built with React.js for frontend and Nest.js for backend. The app allows users to log in with previously registered credentials in order to create and manage tasks. After log in, users can add, update or remove workspaces and tasks. The task are stored in PostgreSQL database which provided by Neon.tech. User profile also can be updated.",
    techStack: [
      "React",
      "Typescript",
      "MaterialUI",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Nest.js",
      "JWT",
      "Prisma ORM",
      "PostgreSQL",
      "Vite",
    ],
    img: "/projects/task-manager-app.png",
    github: "https://github.com/ev0clu/task-manager/",
    demo: "https://task-manager-0d77.onrender.com/",
  },
  {
    name: "Next Blog App",
    description:
      "A basic blog app has built with Next.js framework. The app allows users to log in in order to write comments under any posts.",
    techStack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "React Hook Form",
      "Zod",
      "Prisma ORM",
      "MongoDB",
      "Next-Auth",
      "Markdown",
    ],
    img: "/projects/next-blog-app.png",
    github: "https://github.com/ev0clu/next-blog/",
    demo: "https://next-blog-eight-azure.vercel.app/",
  },
  {
    name: "Stock Market App",
    description:
      "A stock market app has built with Alpha Vantage API. The app allows users to search for stock quotes and display their data in a new view.",
    techStack: ["React", "Typescript", "TailwindCSS", "Highcharts"],
    img: "/projects/stock-market-app.png",
    github: "https://github.com/ev0clu/stock-market-app/",
    demo: "https://stock-market-app-8cq6.vercel.app/",
  },
  {
    name: "Chat App",
    description:
      "A simple chat app has built based on Facebook messenger. User can use public or privat chat as well. For private chat, the user needs to add a friend into the room.",
    techStack: ["React", "Typescript", "Styled-Components", "Firebase"],
    img: "/projects/chat-app.png",
    github: "https://github.com/ev0clu/chat-app/",
    demo: "https://ev0clu.github.io/chat-app/",
  },
  {
    name: "Photo Tagging App",
    description:
      "A photo tagging app has built based on the Where's Waldo? game.",
    techStack: ["React", "Typescript", "TailwindCSS", "Firebase"],
    img: "/projects/photo-tagging-app.png",
    github: "https://github.com/ev0clu/photo-tagging-app/",
    demo: "https://ev0clu.github.io/photo-tagging-app/",
  },
];

export type TProject = typeof projects;
