export function SpecificationTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <div className="rounded-xl border border-slate-100 overflow-hidden">
      <table className="w-full text-[13px]">
        <tbody>
          {specs.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
              <th className="text-left font-medium text-slate-500 px-4 py-3 w-2/5">{row.label}</th>
              <td className="text-slate-900 px-4 py-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
