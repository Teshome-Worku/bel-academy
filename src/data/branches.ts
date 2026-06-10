import type { Branch } from "@/types/branch";

export const branches: Branch[] = [
  {
    id: "branch-buraayyuu",
    name: "Buraayyuu Branch",
    phone: "0942412500",
    address: "Buraayyuu, Addis Ababa",
    hours: "Mon–Sat 8:00–18:00",
  },
  {
    id: "branch-jamoo",
    name: "Jamoo Furii Branch",
    phone: "0944788888",
    address: "Jamoo Furii, Addis Ababa",
    hours: "Mon–Sat 8:00–18:00",
  },
  {
    id: "branch-online",
    name: "Online",
    phone: "0942412500",
    address: "Live classes via Zoom & Google Meet",
    hours: "Flexible schedules",
    isOnline: true,
  },
];
