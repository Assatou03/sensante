# Métriques Dashboard — SénSanté v0.6

## Objectif
Définir les métriques à afficher dans le tableau de bord
à partir des données accumulées par l'IA (v0.5).

---

## Métriques identifiées

### 1. Consultations
- Nombre total de consultations
- Nombre de consultations avec diagnostic IA
- Nombre de consultations sans diagnostic IA (en attente)

### 2. Diagnostics IA
- Nombre total de diagnostics générés
- Taux de diagnostic par niveau d'urgence :
  - 🟢 Faible
  - 🟠 Moyen
  - 🔴 Urgent
- Confiance moyenne des diagnostics (%)
- Diagnostic le plus fréquent

### 3. Patients
- Nombre total de patients enregistrés
- Répartition par région (Dakar, Thiès, Saint-Louis, etc.)
- Répartition par sexe (H / F)
- Tranche d'âge moyenne

### 4. Agents de santé
- Nombre de consultations par agent
- Agent le plus actif

---

## Requêtes Prisma prévues

```ts
// Nombre total de consultations
const totalConsultations = await prisma.consultation.count();

// Consultations avec diagnostic IA
const avecDiagnostic = await prisma.consultation.count({
  where: { diagnosticIa: { not: null } }
});

// Répartition par urgence — à calculer côté JS
// (champ "urgence" non stocké en BDD dans v0.5,
//  à prévoir dans le schéma Prisma pour v0.6)

// Confiance moyenne
const confianceMoyenne = await prisma.consultation.aggregate({
  _avg: { confiance: true }
});

// Nombre de patients par région
const parRegion = await prisma.patient.groupBy({
  by: ["region"],
  _count: { id: true }
});

// Nombre de patients
const totalPatients = await prisma.patient.count();
```

---

## Structure de page prévue pour v0.6
