import { StarRating } from "@/components/ui/star-rating";
import { testimonials } from "@/mock/navigation";

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="shell-wide">
        <h2 className="headline-lg mb-10 text-center text-[clamp(28px,3.4vw,44px)] text-ink">Loved across the continent.</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.id} className="rounded-3xl bg-surface p-7">
              <StarRating rating={t.rating} size="sm" />
              <p className="mb-5 mt-4 text-[17px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-[14px]">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-muted"> · {t.location}</span>
                <p className="mt-0.5 text-[13px] text-ink-soft">Purchased {t.product}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
