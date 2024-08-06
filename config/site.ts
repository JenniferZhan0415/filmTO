export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "filmTO",
  description: "Interactive online guide for film enthusiasts 🎦",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Cinema",
      href: "/cinema",
    },
    {
      label: "Festival",
      href: "/festival",
    },
    {
      label: "Article",
      href: "/article",
    },
    {
      label: "Recommendation",
      href: "/recommendation",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  navMenuItems: [
    {
      label: "Sign in",
      href: "/signin",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/JenniferZhan0415/filmTO/",
  },
};
