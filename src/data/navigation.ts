interface Navigation {
  title: string;
  id: string;
  href: string;
}

export const navItems: Navigation[] = [
  {
    title: "HOME",
    id: "hero",
    href: "/",
  },
  {
    title: "SKILLS",
    id: "skills",
    href: "/skills",
  },
  {
    title: "WORKS",
    id: "works",
    href: "/works",
  },
  {
    title: "BLOGS",
    id: "blogs",
    href: "/blogs",
  },
  {
    title: "ABOUT",
    id: "about",
    href: "/about",
  },
];
