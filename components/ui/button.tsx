import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-ink text-white hover:opacity-90",
  outline: "border border-black/15 text-ink hover:border-brand hover:text-brand",
  ghost: "text-ink-soft hover:text-brand",
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center justify-center h-11 px-5 text-[15px] font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
