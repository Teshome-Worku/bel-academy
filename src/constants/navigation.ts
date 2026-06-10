export const marketingNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Branches", href: "/branches" },
  { label: "Register", href: "/register" },
  { label: "Contact", href: "/contact" },
] as const;

export const adminNav = [
  { label: "Dashboard", href: "/admin" },
  { label: "Students", href: "/admin/students" },
  { label: "Registrations", href: "/admin/registrations" },
  { label: "Branches", href: "/admin/branches" },
  { label: "Programs", href: "/admin/programs" },
] as const;
