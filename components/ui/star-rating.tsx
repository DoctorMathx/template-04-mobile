import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  reviewCount,
  size = "sm",
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}) {
  const starSize = size === "sm" ? 12 : 14;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={starSize}
            className={cn(
              i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
            )}
          />
        ))}
      </div>
      <span className={cn("text-slate-600", size === "sm" ? "text-[12px]" : "text-[13px]")}>
        {rating.toFixed(1)}
        {reviewCount !== undefined && (
          <span className="text-slate-400"> ({reviewCount.toLocaleString()})</span>
        )}
      </span>
    </div>
  );
}
