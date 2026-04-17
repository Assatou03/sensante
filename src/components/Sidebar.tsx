export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 p-6 min-h-screen">
      <nav className="space-y-4">
        <h2 className="text-lg font-bold mb-6">Navigation</h2>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
          Patients
        </a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
          Consultations
        </a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
          Alertes IA
        </a>
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700 transition">
          Statistiques
        </a>
      </nav>
    </aside>
  );
}
