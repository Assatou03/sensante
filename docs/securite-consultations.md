# Rapport Sécurité — Consultations v0.4

## Tests effectués

### GET /api/consultations sans session
- Commande : curl http://localhost:3000/api/consultations
- Résultat attendu : 401
- Résultat obtenu : 401 ✅
- Message : {"error":"Non autorisé"}

### POST /api/consultations sans session
- Commande : curl -X POST http://localhost:3000/api/consultations
- Résultat attendu : 401
- Résultat obtenu : 401 ✅
- Message : {"error":"Non autorisé"}

## Conclusion
Les deux routes sont protégées par getServerSession. ✅
Aucune donnée n'est accessible sans authentification.
