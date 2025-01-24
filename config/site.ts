export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tidy App - Stay Organized, Get Things Done with Ease",
  description:
    "Simplify your day, boost productivity, and keep life tidy with ease!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Tasks",
      href: "/tasks",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/edev0x/tidy-app",
    docs: "https://github.com/edev0x/tidy-app",
    sponsor: "https://github.com/edev0x/tidy-app",
  },
};
