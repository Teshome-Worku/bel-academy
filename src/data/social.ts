import {
  MessageCircle,
  Video,
  Globe,
  Camera,
  Play,
  type LucideIcon,
} from "lucide-react";

export type SocialLink = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  url: string;
  comingSoon?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "telegram",
    Icon: MessageCircle,
    title: "Telegram Community",
    description:
      "Join for updates, registration announcements, and learning resources.",
    url: "https://t.me/bel_academy2",
  },
  {
    id: "tiktok",
    Icon: Video,
    title: "TikTok Lessons",
    description: "Short English lessons and educational videos.",
    url: "https://www.tiktok.com/@bel_academy",
  },
  {
    id: "facebook",
    Icon: Globe,
    title: "Facebook Page",
    description: "Announcements, success stories, and academy updates.",
    url: "PLACEHOLDER_FACEBOOK_LINK",
    comingSoon: true,
  },
  {
    id: "instagram",
    Icon: Camera,
    title: "Instagram",
    description: "Academy activities, learning tips, and student highlights.",
    url: "PLACEHOLDER_INSTAGRAM_LINK",
    comingSoon: true,
  },
  {
    id: "youtube",
    Icon: Play,
    title: "YouTube Channel",
    description: "Long-form English lessons and educational content.",
    url: "PLACEHOLDER_YOUTUBE_LINK",
    comingSoon: true,
  },
];

export const activeSocialLinks = socialLinks.filter((s) => !s.comingSoon);
