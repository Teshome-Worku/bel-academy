import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  BookOpen,
  MapPin,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Students", href: "/admin/students", icon: Users },
  { label: "Registrations", href: "/admin/registrations", icon: ClipboardList },
  { label: "Programs", href: "/admin/programs", icon: BookOpen },
  { label: "Branches", href: "/admin/branches", icon: MapPin },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "Reports", href: "/admin/reports", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export const adminLogoutItem = {
  label: "Logout",
  icon: LogOut,
};

export const marketingNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Branches", href: "/branches" },
  { label: "Register", href: "/register" },
  { label: "Contact", href: "/contact" },
] as const;

/** @deprecated use adminNavItems */
export const adminNav = adminNavItems.map(({ label, href }) => ({ label, href }));

export const breadcrumbLabels: Record<string, string> = {
  admin: "Dashboard",
  students: "Students",
  registrations: "Registrations",
  programs: "Programs",
  branches: "Branches",
  messages: "Messages",
  reports: "Reports",
  settings: "Settings",
};
