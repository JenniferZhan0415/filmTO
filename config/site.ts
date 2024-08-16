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
      label: "Film Recommendation",
      href: "/film",
    },
    {
      label: "Article",
      href: "/article",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  navMenuItems: [
    {
      label: "Login",
      href: "/login",
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
