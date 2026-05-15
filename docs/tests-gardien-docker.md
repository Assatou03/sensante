# Tests Gardien — Lab Docker
## Test de persistance des données
### Procédure
1. docker compose up --build
2. Création de 3 patients et 2 consultations
3. docker compose down
4. docker compose up
5. Vérification que les données sont toujours présentes
### Résultat
- Données persistantes après docker compose down : ✅ / ❌
- Volume pgdata fonctionne correctement : ✅ / ❌
## Capture docker ps
[Capture d'écran à joindre]
