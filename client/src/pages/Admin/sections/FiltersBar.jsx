// Top filter/search bar for admin applications view
import { Input } from "@/components/ui/input";

export default function FiltersBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-4">
      <Input placeholder="Search by name or email" className="bg-gray-900 border-gray-700" />
      <select className="bg-gray-900 border border-gray-700 rounded px-2 py-2 text-sm">
        <option value="">All Status</option>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Hired</option>
        <option>Rejected</option>
      </select>
      <select className="bg-gray-900 border border-gray-700 rounded px-2 py-2 text-sm">
        <option value="">All Roles</option>
        <option>Frontend Engineer</option>
        <option>Backend Engineer</option>
        <option>Designer</option>
      </select>
    </div>
  );
}
