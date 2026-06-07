import Link from "next/link";
import { MapPin, Package, MessageCircle, Clock } from "lucide-react";
import { storeInfo } from "@/mock/navigation";

export function UtilityBar() {
  return (
    <div className="bg-slate-900 text-white text-[12px] h-9 hidden sm:flex items-center">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-brand shrink-0" />
            {storeInfo.region}
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Clock size={13} className="text-brand shrink-0" />
            {storeInfo.hours}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/account" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
            <Package size={13} />
            Track order
          </Link>
          <a
            href={`https://wa.me/${storeInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
          <a href={`tel:${storeInfo.phone.replace(/\s/g, "")}`} className="text-slate-300 hover:text-white transition-colors hidden lg:inline">
            {storeInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
