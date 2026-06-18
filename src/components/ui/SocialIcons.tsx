import React from "react";
import {
  FaFacebook,
  FaTelegram,
  FaTiktok,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

type IconProps = { className?: string; title?: string };

export function FacebookIcon({ className, title = "Facebook" }: IconProps) {
    return <FaFacebook className={className} title={title} aria-label={title} />;
}

export function TelegramIcon({ className, title = "Telegram" }: IconProps) {
    return <FaTelegram className={className} title={title} aria-label={title} />;
}

export function TikTokIcon({ className, title = "TikTok" }: IconProps) {
    return <FaTiktok className={className} title={title} aria-label={title} />;
}

export function YouTubeIcon({ className, title = "YouTube" }: IconProps) {
    return <FaYoutube className={className} title={title} aria-label={title} />;
}

export function InstagramIcon({ className, title = "Instagram" }: IconProps) {
    return (
        <>
            <svg width="0" height="0">
                <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="50%" stopColor="#dd2a7b" />
                    <stop offset="100%" stopColor="#515bd4" />
                </linearGradient>
            </svg>
            <FaInstagram 
                className={className} 
                title={title} 
                aria-label={title} 
                style={{ fill: "url(#ig-grad)" }}
            />
        </>
    );
}
