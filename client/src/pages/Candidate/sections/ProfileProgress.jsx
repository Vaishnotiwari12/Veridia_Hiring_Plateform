// Profile completion progress bar for applicant dashboard
export default function ProfileProgress({ percent = 60 }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-300">Profile Completion</div>
        <div className="text-sm text-gray-400">{percent}%</div>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
