export type ProgramLevel = "beginner" | "intermediate" | "advanced" | "all-levels";

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: ProgramLevel;
  schedule: string;
  featured?: boolean;
  iconName: string;
  outcomes: string[];
  deliveryMode: string;
}
