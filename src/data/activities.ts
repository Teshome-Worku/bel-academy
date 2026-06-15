import type { LucideIcon } from "lucide-react";
import {
  UserPlus,
  CheckCircle,
  BookOpen,
  MapPin,
  RefreshCw,
} from "lucide-react";

export type ActivityType =
  | "registration"
  | "approval"
  | "program"
  | "branch"
  | "student";

export interface Activity {
  id: string;
  type: ActivityType;
  message: string;
  timestamp: string;
  icon: LucideIcon;
}

export const activities: Activity[] = [
  {
    id: "act-1",
    type: "registration",
    message: "Kidus Fikadu submitted a new registration",
    timestamp: "2026-06-08T10:30:00",
    icon: UserPlus,
  },
  {
    id: "act-2",
    type: "approval",
    message: "Registration for Nati Girma was approved",
    timestamp: "2026-06-08T09:15:00",
    icon: CheckCircle,
  },
  {
    id: "act-3",
    type: "student",
    message: "New student Rahel Demissie enrolled in Regular Class",
    timestamp: "2026-06-07T16:45:00",
    icon: UserPlus,
  },
  {
    id: "act-4",
    type: "program",
    message: "Online Class program schedule updated",
    timestamp: "2026-06-07T14:20:00",
    icon: BookOpen,
  },
  {
    id: "act-5",
    type: "branch",
    message: "Jamoo Furii branch contact information changed",
    timestamp: "2026-06-06T11:00:00",
    icon: MapPin,
  },
  {
    id: "act-6",
    type: "approval",
    message: "Registration for Eden Mulatu was approved",
    timestamp: "2026-06-06T09:30:00",
    icon: CheckCircle,
  },
  {
    id: "act-7",
    type: "registration",
    message: "Feven Assefa submitted a new registration",
    timestamp: "2026-06-05T15:10:00",
    icon: UserPlus,
  },
  {
    id: "act-8",
    type: "student",
    message: "Mekdes Worku completed Private Class enrollment",
    timestamp: "2026-06-05T13:00:00",
    icon: RefreshCw,
  },
];
