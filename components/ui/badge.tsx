import { cn } from "@/lib/utils";

type Variant = "new" | "sale" | "bestseller" | "soldout" | "refurbished" | "deal";

const styles: Record<Variant, string> = {
  new: "bg-brand text-white",
  sale: "bg-red-600 text-white",
  bestseller: "bg-slate-900 text-white",
  soldout: "bg-slate-400 text-white",
  refurbished: "bg-violet-700 text-white",
  deal: "bg-brand text-white",
};

export function Badge({ label, variant }: { label: string; variant: Variant }) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-semibold tracking-wide uppercase px-2 py-1 leading-none rounded-sm",
        styles[variant]
      )}
    >
      {label}
    </span>
  );
}
