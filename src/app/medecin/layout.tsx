import Link from "next/link";

export default function MedecinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Menu de navigation */}
      <nav
        style={{
          width: "200px",
          backgroundColor: "#f0f0f0",
          padding: "20px",
        }}
      >
        <h2>Médecin</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/medecin">
              Accueil
            </Link>
          </li>

          <li>
            <Link href="/medecin/patients">
              Patients
            </Link>
          </li>

          <li>
            <Link href="/medecin/consultations">
              Consultations
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contenu */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

    </div>
  );
}
