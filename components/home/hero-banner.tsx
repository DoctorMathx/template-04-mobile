import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-start justify-center overflow-hidden bg-black">
      <Image
        src="/images/lifestyle/iphone-glow.jpg"
        alt="Flagship smartphone"
        fill
        priority
        className="object-cover object-center opacity-[0.85]"
        sizes="100vw"
      />
      {/* legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 shell pt-24 sm:pt-28 text-center">
        <p className="reveal text-[15px] sm:text-[19px] font-medium tracking-wide text-white/70">
          Dee Gadgets Hub
        </p>
        <h1
          className="reveal headline-xl mt-2 text-white text-[clamp(44px,9vw,108px)]"
          style={{ animationDelay: "0.05s" }}
        >
          Flagship.
          <br className="sm:hidden" /> Refined.
        </h1>
        <p
          className="reveal mx-auto mt-5 max-w-xl text-[19px] sm:text-[23px] font-medium leading-snug text-white/80"
          style={{ animationDelay: "0.12s" }}
        >
          The most-wanted phones, verified and warranty-backed. Delivered across Africa.
        </p>
        <div
          className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[19px]"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            href="/collections/smartphones"
            className="pill h-12 bg-brand px-6 text-white hover:bg-brand-dark"
          >
            Shop phones
          </Link>
          <Link href="/deals" className="story-link text-white">
            View the latest deals
          </Link>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[12px] uppercase tracking-[0.3em] text-white/50">
        Scroll
      </div>
    </section>
  );
}
