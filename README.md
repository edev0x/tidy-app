# Tidy

Tidy is a sleek and intuitive task management app designed to help you log and organize your daily tasks, whether for work or personal routines. Stay productive, track your progress, and keep your day clutter-free with Tidy app.

## Features

- **Effortless Task Management**: Add, edit, and delete tasks with ease.
- **Daily Routines**: Stay on top of your recurring tasks and habits.
- **User-Friendly Interface**: Clean design powered by HeroUI and Tailwind CSS.
- **Dark Mode Support**: Seamless theme switching with `next-themes`.
- **Interactive Animations**: Engaging transitions and effects with Framer Motion.

## Demo

🚀 Currently we don't have a Live demo of our application but it will be available very soon. By now, if you are a developer, you can `clone` this repository and run it locally.

## Getting Started

Follow these steps to set up **Tidy** in your machine:

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or later)
- **npm** or **pnpm** (`pnpm` is preferred)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/edev0x/tidy-app.git
   cd tidy
   ```

2. Setup the environment variables:

   Rename the `.env.local.example` file to `.env.local` and set the following variables:

   ```bash
    AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
    AUTH0_CLIENT_ID=your-auth0-application-client-id
    AUTH0_CLIENT_SECRET=your-auth0-application-client-secret
    AUTH0_DOMAIN=the-auth0-domain-of-your-tenant
    APP_BASE_URL=url-of-your-app
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- [Next.js 15](https://nextjs.org/docs/getting-started) - Framework for React applications.
- [HeroUI v2](https://heroui.com/) - Components for building accessible UI.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Tailwind Variants](https://tailwind-variants.org) - Managing and styling Tailwind components.
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for scalable development.
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React.
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching support for Next.js.
- [auth0](https://auth0.com/) - Auth0 is an easy to implement, adaptable authentication and authorization platform.
- [Docker](https://docker.com/) - Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
- [Postgres](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database and is required to persist your data.

## Contributing

We welcome contributions to Tidy! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if you'd like adjustments or additional sections!
