# Sécurité — Lab Dashboard
## Test : API /api/stats sans session
- Commande : `curl http://localhost:3000/api/stats`
- Résultat attendu : 401 Non autorisé
- Résultat obtenu : [à remplir]
- Statut : ✅ / ❌
## Conclusion
L'API de statistiques est protégée par getServerSession.
Seuls les utilisateurs connectés peuvent accéder aux données du dashboard.
