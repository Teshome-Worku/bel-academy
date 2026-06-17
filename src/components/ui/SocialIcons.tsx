import React from "react";

type IconProps = { className?: string; title?: string };

export function FacebookIcon({ className, title = "Facebook" }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
        </svg>
    );
}

export function TelegramIcon({ className, title = "Telegram" }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path d="M22.162 2.42L1.68 9.05c-.9.316-.888 1.102.188 1.388l4.412 1.102 1.055 4.22c.202.81.746 1.01 1.286.62l3.42-2.5 4.53 3.33c.83.468 1.45.22 1.66-.748l2.07-13.06c.25-1.26-.44-1.77-1.34-1.4z" />
        </svg>
    );
}

export function TikTokIcon({ className, title = "TikTok" }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
        >
            <title>{title}</title>
            {/* TikTok - layered musical note with cyan and magenta offsets to mimic brand mark */}
            <circle cx="12" cy="12" r="10" fill="#000" />
            <path d="M14.2 6.2v6.1c-.5-.1-1.1-.2-1.6-.2-1.5 0-2.7 1.2-2.7 2.7 0 1.6 1.2 2.8 2.7 2.8s2.7-1.2 2.7-2.8V9.5c.9.3 1.8.4 2.7.2v-3.5c-1 .6-2.1.9-3.5.5z" fill="#fff" />
            <path d="M13.9 6.05c-.12-.03-.24-.05-.36-.05-1.02 0-1.88.67-2.16 1.57-.24.07-.48.11-.73.11-1.09 0-1.98.88-1.98 1.98 0 1.52 1.28 2.76 2.83 2.62v3.25c0 .61.5 1.1 1.11 1.1.61 0 1.11-.49 1.11-1.1V8.6c.37.11.77.18 1.18.18.62 0 1.19-.3 1.55-.77V6.05c-.46.32-.99.5-1.63.37z" fill="#69C9D0" opacity="0.95" transform="translate(-0.15,0.05)" />
            <path d="M14.05 6.1c-.12-.03-.24-.05-.36-.05-.9 0-1.66.59-1.94 1.37-.24.07-.48.11-.73.11-.99 0-1.8.8-1.8 1.8 0 1.39 1.17 2.53 2.6 2.4v3.25c0 .5.4.9.9.9s.9-.4.9-.9V8.6c.33.11.68.18 1.04.18.55 0 1.05-.27 1.37-.68V6.1c-.34.27-.74.42-1.27.32z" fill="#EE1D52" opacity="0.95" transform="translate(0.12,-0.08)" />
        </svg>
    );
}

export function YouTubeIcon({ className, title = "YouTube" }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path d="M23.498 6.186a2.994 2.994 0 00-2.106-2.117C19.595 3.5 12 3.5 12 3.5s-7.595 0-9.392.569A2.994 2.994 0 00.502 6.186 31.19 31.19 0 000 12a31.19 31.19 0 00.502 5.814 2.994 2.994 0 002.106 2.117C4.405 20.5 12 20.5 12 20.5s7.595 0 9.392-.569a2.994 2.994 0 002.106-2.117A31.19 31.19 0 0024 12a31.19 31.19 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
    );
}

export function InstagramIcon({ className, title = "Instagram" }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
        >
            <title>{title}</title>
            <defs>
                <linearGradient id="igGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="50%" stopColor="#dd2a7b" />
                    <stop offset="100%" stopColor="#515bd4" />
                </linearGradient>
            </defs>
            <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#igGrad)" />
            <path d="M12 8.2a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6zm4.9-2.4a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" fill="#fff" />
            <path d="M7.5 6h9a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0116.5 18h-9A1.5 1.5 0 016 16.5v-9A1.5 1.5 0 017.5 6z" fill="none" />
        </svg>
    );
}
