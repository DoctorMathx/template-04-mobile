import { Button } from "@/components/ui/button";
import { storeInfo } from "@/mock/navigation";

export function FinalCta() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="shell text-center">
        <h2 className="headline-lg text-[clamp(32px,5vw,60px)] text-ink">Ready for your next device?</h2>
        <p className="mx-auto mt-4 max-w-lg text-[18px] sm:text-[21px] font-medium text-ink-soft">
          Browse the latest phones, compare deals, or talk to our team.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/collections/smartphones">Shop latest phones</Button>
          <Button href="/deals" variant="outline">
            Browse deals
          </Button>
          <a
            href={`https://wa.me/${storeInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 text-[15px] font-medium rounded-full text-ink hover:text-brand transition-colors"
          >
            Contact support
          </a>
        </div>
      </div>
    </section>
  );
}
