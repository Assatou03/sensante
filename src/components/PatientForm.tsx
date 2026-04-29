
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
    </form>
  );
}
