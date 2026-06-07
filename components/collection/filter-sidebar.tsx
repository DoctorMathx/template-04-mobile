"use client";

import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type PhoneFilters = {
  brands: string[];
  conditions: string[];
  storage: string[];
  ram: string[];
  has5G: boolean | null;
  inStockOnly: boolean;
  priceRange: [number, number];
};

interface FilterSidebarProps {
  filters: PhoneFilters;
  onChange: (filters: PhoneFilters) => void;
  availableBrands: string[];
  availableStorage: string[];
  availableRam: string[];
  maxPrice: number;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function FilterSidebar({
  filters,
  onChange,
  availableBrands,
  availableStorage,
  availableRam,
  maxPrice,
  mobileOpen,
  onMobileClose,
}: FilterSidebarProps) {
  const toggle = (key: "brands" | "conditions" | "storage" | "ram", value: string) => {
    const arr = filters[key];
    onChange({
      ...filters,
      [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
    });
  };

  const activeCount =
    filters.brands.length +
    filters.conditions.length +
    filters.storage.length +
    filters.ram.length +
    (filters.has5G !== null ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0);

  const content = (
    <div className="space-y-6 text-sm">
      {activeCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">{activeCount} filters active</span>
          <button
            onClick={() =>
              onChange({
                brands: [],
                conditions: [],
                storage: [],
                ram: [],
                has5G: null,
                inStockOnly: false,
                priceRange: [0, maxPrice],
              })
            }
            className="text-xs text-brand font-medium"
          >
            Clear all
          </button>
        </div>
      )}

      <FilterGroup title="Availability">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChange({ ...filters, inStockOnly: e.target.checked })}
            className="rounded border-slate-300 text-brand focus:ring-brand"
          />
          <span className="text-slate-700">In stock only</span>
        </label>
      </FilterGroup>

      <FilterGroup title="Brand">
        <div className="space-y-2">
          {availableBrands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggle("brands", brand)}
                className="rounded border-slate-300 text-brand focus:ring-brand"
              />
              <span className="text-slate-700">{brand}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Condition">
        {["new", "refurbished", "open-box"].map((c) => (
          <label key={c} className="flex items-center gap-2 cursor-pointer capitalize">
            <input
              type="checkbox"
              checked={filters.conditions.includes(c)}
              onChange={() => toggle("conditions", c)}
              className="rounded border-slate-300 text-brand focus:ring-brand"
            />
            <span className="text-slate-700">{c.replace("-", " ")}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={maxPrice}
            step={10000}
            value={filters.priceRange[1]}
            onChange={(e) =>
              onChange({ ...filters, priceRange: [0, Number(e.target.value)] })
            }
            className="w-full accent-brand"
          />
          <p className="text-xs text-slate-500">Up to ₦{filters.priceRange[1].toLocaleString()}</p>
        </div>
      </FilterGroup>

      <FilterGroup title="Storage">
        <div className="flex flex-wrap gap-2">
          {availableStorage.map((s) => (
            <button
              key={s}
              onClick={() => toggle("storage", s)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md border transition-colors",
                filters.storage.includes(s)
                  ? "border-brand bg-brand-light text-brand"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="RAM">
        <div className="flex flex-wrap gap-2">
          {availableRam.map((r) => (
            <button
              key={r}
              onClick={() => toggle("ram", r)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-md border transition-colors",
                filters.ram.includes(r)
                  ? "border-brand bg-brand-light text-brand"
                  : "border-slate-200 text-slate-600 hover:border-slate-300"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Network">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.has5G === true}
            onChange={(e) => onChange({ ...filters, has5G: e.target.checked ? true : null })}
            className="rounded border-slate-300 text-brand focus:ring-brand"
          />
          <span className="text-slate-700">5G only</span>
        </label>
      </FilterGroup>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">{content}</aside>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onMobileClose} />
          <div className="absolute inset-y-0 left-0 w-[min(100%,320px)] bg-white p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[16px] font-bold">Filters</h2>
              <button onClick={onMobileClose} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-slate-100 pb-5">
      <details open className="group">
        <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900 mb-3">
          {title}
          <ChevronDown size={16} className="text-slate-400 group-open:rotate-180 transition-transform" />
        </summary>
        {children}
      </details>
    </div>
  );
}
