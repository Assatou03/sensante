
"use client";

import { useState } from "react";

interface PatientFormProps {
  onSuccess: () => void;
}

export default function PatientForm({ onSuccess }: PatientFormProps) {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    sexe: "",
    telephone: "",
    adresse: "",
    region: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="nom" placeholder="Nom" onChange={handleChange} required className="border p-2 w-full" />
      <input name="prenom" placeholder="Prénom" onChange={handleChange} required className="border p-2 w-full" />
      <input name="dateNaissance" type="date" onChange={handleChange} required className="border p-2 w-full" />
      <select name="sexe" onChange={handleChange} required className="border p-2 w-full">
        <option value="">Sexe</option>
        <option value="M">Masculin</option>
        <option value="F">Féminin</option>
      </select>
      <input name="telephone" placeholder="Téléphone" onChange={handleChange} className="border p-2 w-full" />
      <input name="adresse" placeholder="Adresse" onChange={handleChange} className="border p-2 w-full" />
      <input name="region" placeholder="Région" onChange={handleChange} required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enregistrer</button>
"use client";
import { useState } from "react";

export default function PatientForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      dateNaissance: formData.get("dateNaissance"),
      sexe: formData.get("sexe"),
      telephone: formData.get("telephone"),
      adresse: formData.get("adresse"),
      region: formData.get("region"),
    };
    const res = await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      e.currentTarget.reset();
      onSuccess();
    }
    setLoading(false);
  }

  const regions = [
    "Dakar", "Thiès", "Saint-Louis", "Ziguinchor",
    "Tambacounda", "Kaolack", "Louga", "Fatick",
    "Kolda", "Matam", "Kaffrine", "Kédougou",
    "Sédhiou", "Diourbel",
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Nouveau patient</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nom" placeholder="Nom" required className="p-3 border rounded-lg" />
        <input name="prenom" placeholder="Prénom" required className="p-3 border rounded-lg" />
        <input name="dateNaissance" type="date" required className="p-3 border rounded-lg" />
        <select name="sexe" required className="p-3 border rounded-lg">
          <option value="">Sexe</option>
          <option value="F">Femme</option>
          <option value="M">Homme</option>
        </select>
        <input name="telephone" placeholder="Téléphone (optionnel)" className="p-3 border rounded-lg" />
        <select name="region" required className="p-3 border rounded-lg">
          <option value="">Région</option>
          {regions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <input name="adresse" placeholder="Adresse (optionnel)" className="w-full p-3 border rounded-lg" />
      <button type="submit" disabled={loading}
        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50">
        {loading ? "Enregistrement..." : "Enregistrer"}
      </button>
    </form>
  );
}
