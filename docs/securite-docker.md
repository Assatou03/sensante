# Sécurité – Lab Docker

## Test 1 : Variables sensibles absentes du docker-compose.yml
- GROQ_API_KEY en dur : ✅ absent
- NEXTAUTH_SECRET en dur : ✅ absent (utilise ${NEXTAUTH_SECRET})
- Utilisation de ${VAR} : ✅

## Test 2 : .env dans .dockerignore
- Résultat : ✅ .env est présent

## Test 3 : .env jamais commité dans Git
- Résultat : ✅ aucun commit ne contient .env

## Conclusion
Les variables sensibles sont correctement protégées. Elles sont lues depuis le .env local via ${VAR} dans docker-compose.yml.
