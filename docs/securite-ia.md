# Sécurité – Lab IA

## Tests effectués

### Test 1 : Appel API sans session
- Commande : `curl -X POST /api/ia/diagnostic -d '{ "consultationId":1 }'`
- Résultat attendu : 401 Non autorisé
- Résultat obtenu : `{"error":"Non autorisé"}`
- Statut : ✅

### Test 2 : Clé API absente du code
- Commande : `grep -r "gsk_" src/`
- Résultat : Aucune occurrence trouvée
- Statut : ✅

### Test 3 : .env dans .gitignore
- Résultat : `.env` est bien listé dans `.gitignore`
- Statut : ✅

## Conclusion
Les trois exigences de sécurité sont satisfaites.  
L’API IA est correctement protégée (authentification requise) et aucun secret n’est exposé dans le dépôt.
