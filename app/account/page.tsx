"use client";

import { useState, FormEvent } from "react";
import { Package, User, Heart, MessageCircle } from "lucide-react";
import { storeInfo } from "@/mock/navigation";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  const [orderId, setOrderId] = useState("");
  const [tracked, setTracked] = useState<string | null>(null);

  const handleTrack = (e: FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setTracked(orderId.trim());
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
      <h1 className="text-[28px] font-bold text-slate-900 mb-2">Account & support</h1>
      <p className="text-[14px] text-slate-500 mb-10">Track orders, manage your account, or get help from our team.</p>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[
          { icon: User, title: "Sign in", desc: "View order history and saved addresses.", action: "Sign in" },
          { icon: Heart, title: "Wishlist", desc: "Save devices and accessories for later.", action: "View wishlist" },
          { icon: MessageCircle, title: "Support", desc: "Chat with us on WhatsApp or email.", action: "Contact us" },
        ].map((card) => (
          <div key={card.title} className="p-6 rounded-xl border border-slate-100 bg-white">
            <card.icon size={22} className="text-brand mb-4" />
            <h2 className="text-[16px] font-semibold text-slate-900 mb-2">{card.title}</h2>
            <p className="text-[13px] text-slate-500 mb-4">{card.desc}</p>
            <button className="text-[13px] font-semibold text-brand hover:text-brand-dark">{card.action} →</button>
          </div>
        ))}
      </div>

      <div className="max-w-lg p-6 rounded-xl border border-slate-100 bg-surface">
        <div className="flex items-center gap-2 mb-4">
          <Package size={20} className="text-brand" />
          <h2 className="text-[18px] font-semibold text-slate-900">Track your order</h2>
        </div>
        <form onSubmit={handleTrack} className="flex gap-2">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter order number"
            className="flex-1 h-11 px-4 rounded-lg border border-slate-200 text-[14px] focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
          />
          <Button type="submit">Track</Button>
        </form>
        {tracked && (
          <div className="mt-4 p-4 rounded-lg bg-white border border-slate-100 text-[13px] text-slate-600">
            <p className="font-medium text-slate-900 mb-1">Order #{tracked}</p>
            <p>Status: <span className="text-brand font-medium">Processing</span> — Your order is being prepared for dispatch.</p>
            <p className="text-[12px] text-slate-400 mt-2">Demo tracking for template preview.</p>
          </div>
        )}
        <p className="text-[12px] text-slate-400 mt-4">
          Need help? Call {storeInfo.phone} or email {storeInfo.email}
        </p>
      </div>
    </div>
  );
}
