// Admin Dashboard page composed from sections
// For now uses placeholders; integrate your existing AdminDashboard logic later
import AdminLayout from "@/layouts/AdminLayout";
import FiltersBar from "./sections/FiltersBar";
import ActionsBar from "./sections/ActionsBar";
import ApplicationsTable from "./sections/ApplicationsTable";

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Admin Dashboard">
      <FiltersBar />
      <ActionsBar />
      <ApplicationsTable />
    </AdminLayout>
  );
}
