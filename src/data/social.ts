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
    url: "https://t.me/BEL_ACADEMY2",
  },
  {
    id: "tiktok",
    Icon: Video,
    title: "TikTok Lessons",
    description: "Short English lessons and educational videos.",
    url: "https://www.tiktok.com/@oromoenglish.bel.academy",
  },
  {
    id: "facebook",
    Icon: Globe,
    title: "Facebook Page",
    description: "Announcements, success stories, and academy updates.",
    url: "https://web.facebook.com/profile.php?id=61575630489570",
  },
  {
    id: "instagram",
    Icon: Camera,
    title: "Instagram",
    description: "Academy activities, learning tips, and student highlights.",
    url: "https://www.instagram.com/oromo_english_bel_academy/",
  },
  {
    id: "youtube",
    Icon: Play,
    title: "YouTube Channel",
    description: "Long-form English lessons and educational content.",
    url: "https://www.youtube.com/@BELACADEMY",
  },
];

export const activeSocialLinks = socialLinks.filter((s) => !s.comingSoon);
