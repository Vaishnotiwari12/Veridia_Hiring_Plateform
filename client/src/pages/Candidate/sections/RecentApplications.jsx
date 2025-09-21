// Recent applications list; reuse your existing candidate list when integrating
import { Card } from "@/components/ui/card";

export default function RecentApplications({ items = [], onApplyClick }) {
  return (
    <Card className="p-3 md:p-4 rounded-2xl bg-gray-800 border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
        <div className="text-lg font-semibold">Recent Applications</div>
        {onApplyClick && (
          <button
            onClick={onApplyClick}
            className="px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm font-medium self-start sm:self-auto"
          >
            New Application
          </button>
        )}
      </div>
      {items.length === 0 ? (
        <div className="text-gray-400 text-sm">
          <p className="mb-3">No recent applications.</p>
          {onApplyClick && (
            <button
              onClick={onApplyClick}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium w-full sm:w-auto"
            >
              Start Your First Application
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((it) => (
            <div key={it.id} className="p-3 bg-gray-700 rounded-lg border border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{it.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{it.date}</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs whitespace-nowrap">{it.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
