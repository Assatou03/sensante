# Format des données pour l'IA — v0.5

## Contexte
Dans le Lab IA (v0.5), L'Oracle enverra les symptômes
de chaque consultation à l'API Groq (Llama 3) pour
obtenir un pré-diagnostic automatique.

## Structure envoyée à Groq

```json
{
  "symptomes": ["Fièvre", "Toux", "Fatigue"],
  "notes": "Patient se plaint de fièvre depuis 3 jours"
}
