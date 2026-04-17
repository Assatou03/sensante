import PatientCard from "@/components/PatientCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-teal-50 to-white p-8">
      
      {/* En-tête — version medecin */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-teal-700 mb-4">
          SénSanté
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Assistant de santé communautaire avec IA
        </p>
      </div>

      {/* Liste patients — version main */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Patients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PatientCard nom="Aminata Sow" region="Dakar" age={34} />
          <PatientCard nom="Ibrahima Ba" region="Thiès" age={45} />
          <PatientCard nom="Awa Diallo" region="Saint-Louis" age={28} />
        </div>
      </div>

      {/* Disclaimer commun */}
      <p className="text-xs text-gray-400 italic mt-8">
        Ceci n'est pas un outil médical. Consultez un professionnel de santé.
      </p>

    </main>
  );
}


