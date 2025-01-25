import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Auth0Provider } from "@auth0/nextjs-auth0";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { auth0 } from "@/lib/auth0";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth0.getSession();

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Auth0Provider user={session?.user}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-4">
                <Link
                  isExternal
                  className="flex items-center gap-2 text-current"
                  href="#"
                  title="heroui.com homepage"
                >
                  <p className="text-stone-600 font-semibold">Tidy App</p>
                  <span className="text-default-600">
                    - All rights reserved &copy; {new Date().getFullYear()}
                  </span>
                </Link>
              </footer>
            </div>
          </Providers>
        </Auth0Provider>
      </body>
    </html>
  );
}
