import { site } from "@/lib/data";

const paths: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  Facebook: <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" />,
  TikTok: (
    <>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.5 3 2.5 5 5.5 5" />
    </>
  ),
};

export function SocialIcons() {
  return (
    <div className="mt-2 flex gap-2.5">
      {site.social.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={`${s.label} ${site.handle}`}
          target="_blank"
          rel="noreferrer"
          className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-gold hover:text-gold-light"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {paths[s.label]}
          </svg>
        </a>
      ))}
    </div>
  );
}
