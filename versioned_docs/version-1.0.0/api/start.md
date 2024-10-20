# Guide de Démarrage

Ce guide vous aidera à démarrer avec notre API en quelques étapes simples. Vous découvrirez les prérequis, l'installation, et des exemples de requêtes pour vous familiariser rapidement avec notre API.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- Un compte utilisateur sur notre plateforme.
- Une clé API personnelle pour accéder à l'API. Vous pouvez obtenir cette clé depuis votre tableau de bord utilisateur.
- Un outil pour tester les requêtes API comme [Postman](https://www.postman.com/) ou cURL.

## Installation

### Utilisation de cURL

Vous pouvez utiliser cURL pour effectuer des requêtes API directement depuis la ligne de commande.

### Utilisation de Postman

Postman est un outil convivial pour tester les API. Téléchargez et installez Postman à partir de [ce lien](https://www.postman.com/downloads/).

## Effectuer Votre Première Requête

### Exemple avec cURL

Pour effectuer une requête GET à notre API pour récupérer des informations publiques, utilisez la commande suivante :

```bash
curl -X GET "https://api.example.com/public-info" -H "Authorization: Bearer YOUR_API_KEY"
```

### Exemple avec Postman

1. Ouvrez Postman et créez une nouvelle requête.
2. Sélectionnez `GET` comme méthode HTTP.
3. Entrez l'URL suivante : `https://api.example.com/public-info`
4. Dans l'onglet "Headers", ajoutez une clé `Authorization` avec la valeur `Bearer YOUR_API_KEY`.
5. Cliquez sur `Send` pour envoyer la requête.

## Intégration dans Votre Projet

### Exemple en JavaScript (Node.js)

Voici un exemple de code pour intégrer notre API dans une application Node.js :

```javascript
const fetch = require('node-fetch');

const url = 'https://api.example.com/private-info';
const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
  },
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));
```

### Exemple en Python

Voici comment effectuer une requête GET en utilisant Python et la bibliothèque `requests` :

```python
import requests

url = "https://api.example.com/private-info"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
data = response.json()
print(data)
```

## Prochaines Étapes

Maintenant que vous avez effectué votre première requête avec succès, vous pouvez explorer les autres fonctionnalités de notre API :

- Consultez la section [Authentification](authentification) pour en savoir plus sur les différentes méthodes d'authentification.
- Explorez les [Endpoints](endpoints/overview) pour découvrir toutes les ressources disponibles via notre API.
- Consultez des exemples de [Cas d'Utilisation](use-cases) pour voir comment intégrer notre API dans divers scénarios pratiques.

Si vous rencontrez des difficultés ou avez des questions, n'hésitez pas à consulter notre section [Support](../support/contact) ou à nous contacter à l'adresse suivante : support@example.com.

---

Retournez à la [Documentation de l'API](intro) pour une vue d'ensemble complète.
