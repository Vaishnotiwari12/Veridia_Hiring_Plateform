// KPI-style status cards for applicant dashboard
import { Card } from "@/components/ui/card";

export default function StatusCards({ data = { submitted: 0, review: 0, selected: 0 } }) {
  const items = [
    { label: 'Submitted', value: data.submitted },
    { label: 'Under Review', value: data.review },
    { label: 'Selected', value: data.selected },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((it) => (
        <Card key={it.label} className="p-4 rounded-2xl bg-gray-800 border-gray-700">
          <div className="text-sm text-gray-400">{it.label}</div>
          <div className="text-2xl font-bold mt-2">{it.value}</div>
        </Card>
      ))}
    </div>
  );
}
