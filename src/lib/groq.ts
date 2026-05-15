// src/lib/groq.ts
import Groq from "groq-sdk";

interface PatientContext {
  nom: string;
  prenom: string;
  age: number;
  sexe: string;
  region: string;
}

export async function analyserSymptomes(
  patient: PatientContext,
  symptomes: string[],
  notes: string | null
): Promise<{
  diagnostic: string;
  confiance: number;
  recommandation: string;
  urgence: "faible" | "moyen" | "urgent";
}> {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const prompt = `Tu es un assistant médical d'aide à la décision clinique.
Analyse les informations suivantes et fournis un diagnostic probable.
Patient : ${patient.prenom} ${patient.nom}, ${patient.age} ans, ${patient.sexe}, région : ${patient.region}
Symptômes : ${symptomes.join(", ")}
${notes ? `Notes cliniques : ${notes}` : ""}
Réponds UNIQUEMENT en JSON valide (sans markdown, sans explication) avec ce format :
{
  "diagnostic": "description courte du diagnostic probable",
  "confiance": 80,
  "recommandation": "conseil pratique pour le médecin",
  "urgence": "faible"
}
Le champ "urgence" doit être exactement : "faible", "moyen" ou "urgent".
Le champ "confiance" est un entier entre 0 et 100.`;

  const completion = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [
      {
        role: "system",
        content:
          "Tu es un assistant médical. Tu réponds toujours en JSON valide uniquement, sans aucun texte autour.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.3,
    max_tokens: 500,
  });

  const content = completion.choices[0]?.message?.content ?? "{}";

  try {
    const parsed = JSON.parse(content);
    return {
      diagnostic: parsed.diagnostic ?? "Indéterminé",
      confiance: parsed.confiance ?? 50,
      recommandation: parsed.recommandation ?? "Consulter un spécialiste.",
      urgence: ["faible", "moyen", "urgent"].includes(parsed.urgence)
        ? parsed.urgence
        : "moyen",
    };
  } catch {
    return {
      diagnostic: "Analyse non disponible",
      confiance: 0,
      recommandation: "Veuillez consulter un médecin.",
      urgence: "moyen",
    };
  }
}
