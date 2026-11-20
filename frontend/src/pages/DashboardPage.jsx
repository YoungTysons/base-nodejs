import { useAuthStore } from '@/store/authStore';

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back, <strong>{user?.name}</strong>!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Users', 'Revenue', 'Orders'].map((title, i) => (
          <div key={title} className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{(i + 1) * 128}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
