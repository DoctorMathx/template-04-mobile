import Image from "next/image";
import Link from "next/link";

export function CinematicBand() {
  return (
    <section className="relative isolate flex min-h-[460px] items-center justify-center overflow-hidden bg-black sm:min-h-[560px]">
      <Image
        src="/images/lifestyle/concert.jpg"
        alt="Capturing a live moment on a phone"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <div className="relative z-10 shell text-center">
        <p className="text-[15px] sm:text-[17px] font-medium text-white/70">Pro-grade cameras</p>
        <h2 className="headline-lg mt-2 text-white text-[clamp(34px,5.5vw,64px)]">
          Capture every moment.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[18px] sm:text-[22px] font-medium leading-snug text-white/80">
          Low-light brilliance, cinematic video, and detail that holds up. Find the camera that moves with you.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[18px]">
          <Link href="/collections/flagship-phones" className="pill h-11 bg-white px-5 text-black hover:bg-white/85">
            Explore flagships
          </Link>
          <Link href="/collections/smartphones" className="story-link text-white">
            Compare all phones
          </Link>
        </div>
      </div>
    </section>
  );
}
