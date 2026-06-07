import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type StoryLink = {
  label: string;
  href: string;
  variant?: "pill" | "text";
};

export type StoryTileProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  theme?: "light" | "dark";
  align?: "center" | "left";
  placement?: "top" | "bottom";
  links?: StoryLink[];
  /** tall = full-height marquee, grid = used inside two-up grid */
  size?: "tall" | "grid";
  className?: string;
  priority?: boolean;
};

export function StoryTile({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  theme = "light",
  align = "center",
  placement = "top",
  links = [],
  size = "tall",
  className,
  priority = false,
}: StoryTileProps) {
  const dark = theme === "dark";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        size === "tall" ? "min-h-[620px] lg:min-h-[700px]" : "min-h-[560px]",
        dark ? "bg-black text-white" : "bg-surface text-ink",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes={size === "tall" ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
      />
      <div
        className={cn(
          "absolute inset-0",
          dark
            ? placement === "top"
              ? "bg-gradient-to-b from-black/75 via-black/20 to-transparent"
              : "bg-gradient-to-t from-black/80 via-black/25 to-transparent"
            : placement === "top"
            ? "bg-gradient-to-b from-white/85 via-white/35 to-transparent"
            : "bg-gradient-to-t from-white/90 via-white/40 to-transparent"
        )}
      />

      <div
        className={cn(
          "relative z-10 flex flex-col px-6 sm:px-10",
          size === "tall" ? "min-h-[620px] lg:min-h-[700px]" : "min-h-[560px]",
          placement === "top" ? "justify-start pt-12 sm:pt-16" : "justify-end pb-12 sm:pb-16",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        {eyebrow && (
          <p
            className={cn(
              "text-[14px] sm:text-[16px] font-medium",
              dark ? "text-white/70" : "text-brand"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "headline-lg mt-1",
            size === "tall" ? "text-[clamp(34px,5vw,56px)]" : "text-[clamp(30px,3.4vw,44px)]"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-3 max-w-md text-[18px] sm:text-[21px] font-medium leading-snug",
              dark ? "text-white/80" : "text-ink-soft"
            )}
          >
            {subtitle}
          </p>
        )}
        {links.length > 0 && (
          <div
            className={cn(
              "mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[17px] sm:text-[19px]",
              align === "center" ? "justify-center" : "justify-start"
            )}
          >
            {links.map((link) =>
              link.variant === "pill" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="pill h-11 bg-brand px-5 text-white hover:bg-brand-dark"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn("story-link", dark ? "text-white" : "text-brand")}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
