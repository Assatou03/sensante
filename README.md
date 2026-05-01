# SénSanté

Assistant de santé communautaire avec IA.

## Stack technique
- Next.js 14 (App Router)
- Tailwind CSS
- Prisma + PostgreSQL
- Groq API (Llama 3)
- NextAuth.js
- Docker Compose

## Installation
```bash
npm install
cp .env.example .env # puis remplir les valeurs
npx prisma db push
npm run dev
```

## Équipe
Licence 3 GLSI - ESP/UCAD - 2025-2026

## Authentification

Ce projet utilise NextAuth.js avec le provider Credentials.

### Installation
\`\`\`bash
npm install next-auth bcrypt
npm install --save-dev @types/bcrypt
\`\`\`

### Variables d'environnement
Copier `.env.example` vers `.env` et remplir les valeurs.

Générer un secret NextAuth :
\`\`\`bash
openssl rand -base64 32
\`\`\`

### Rôles
- AGENT : accès patients et consultations
- MEDECIN : accès complet sauf dashboard
- ADMIN : accès complet
