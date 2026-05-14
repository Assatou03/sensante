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

## 🐳 Lancer avec Docker
### Prérequis-[Docker Desktop](https://www.docker.com/products/docker-desktop/) installé- Fichier `.env` configuré à la racine (voir `.env.example`)
### Variables d'environnement requises dans `.env`
```env
DATABASE_URL="postgresql://postgres:postgres@db:5432/sensante?schema=public"
NEXTAUTH_SECRET="votre_secret_ici"
NEXTAUTH_URL="http://localhost:3000"
GROQ_API_KEY="gsk_votre_cle_groq"
```
### Lancer l'application
```bash
# 1. Construire et lancer tous les services
docker compose up --build
# 2. Dans un autre terminal, créer les tables (première fois uniquement)
docker compose exec app npx prisma db push
# 3. Ouvrir l'application
# http://localhost:3000
```
### Arrêter l'application
```bash
docker compose down
# Les données sont conservées dans le volume pgdata
```
### Commandes utiles
```bash
docker ps # Voir les conteneurs actifs
docker compose logs app            # Logs de l'application
docker compose logs db             # Logs de la base de données
docker compose exec app sh # Entrer dans le conteneur app
docker compose exec app npx prisma studio  # Interface Prisma
docker compose down -v             # ⚠ Supprime aussi les données
```
