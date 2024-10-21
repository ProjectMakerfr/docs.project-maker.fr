# Les Erreurs

Bienvenue dans la documentation des erreurs du site. Cette page fournit une liste détaillée des codes d'erreur utilisés pour classer et identifier les problèmes.
En cas de problème, consultez cette liste d'erreurs pour comprendre le problème et prendre les mesures nécessaires avant de contacter un service d'assistance.



## Erreurs Basiques

| Code | Description | Solution Rapide |
| :--: | ---- | ---- |
| 400 | Requête incorrecte | Vérifiez les données envoyées dans la requête. |
| 401 | Non autorisé | Assurez-vous d'avoir les permissions nécessaires. |
| 403 | Accès refusé à la ressource | Vérifiez les autorisations, contactez l'administrateur. |
| 404 | Page non trouvée | Vérifiez l'URL, contactez l'administrateur. |
| 408 | Temps d'attente de la requête dépassé | Vérifiez votre connexion, réessayez. |
| 429 | Trop de requêtes | Attendez un moment avant de réessayer. |
| 500 | Erreur interne du serveur | Attendez, rafraîchissez, contactez l'assistance. |
| 502 | Réponse invalide du serveur | Rechargez, essayez plus tard, contactez l'assistance. |
| 503 | Service indisponible | Le service est temporairement indisponible, réessayez plus tard. |
| 504 | Temps d'attente de la passerelle dépassé | Rechargez la page ou essayez plus tard. |



<!-- Système de codification des erreurs

Le schéma des codes d'erreurs peut suivre cette structure :

    Milliers (x000 - x999) : Désignation du service concerné
    Cela désigne le domaine ou service qui génère l'erreur (par exemple, API, base de données, authentification, etc.).

    Centaines (0x00 - 9x99) : Sous-service ou composant
    Cela désigne un sous-service ou un composant spécifique au sein du domaine/service principal.

    Dizaines et unités (00xx - 99xx) : Type d’erreur ou situation
    Ces chiffres désignent le type d'erreur ou la situation particulière. Cela inclut les erreurs comme des exceptions spécifiques, des ressources manquantes, des violations de règles de validation, etc.

Exemple de groupes d’erreurs :

    1000 - 1999 : Erreurs liées à l'authentification
        1000 : Authentification générale
        1100 : Jeton invalide ou expiré
        1200 : Utilisateur non trouvé
        1300 : Mot de passe incorrect
        1400 : Compte verrouillé

    2000 - 2999 : Erreurs liées à l’API
        2000 : API - Problème général
        2100 : Point de terminaison non disponible
        2200 : Requête malformée
        2300 : Ressource introuvable
        2400 : Méthode HTTP non autorisée

    3000 - 3999 : Erreurs liées à la base de données
        3000 : Problème général de base de données
        3100 : Connexion échouée
        3200 : Requête SQL invalide
        3300 : Conflit de clé
        3400 : Délai dépassé

    4000 - 4999 : Erreurs liées au stockage de fichiers
        4000 : Problème général de stockage
        4100 : Fichier non trouvé
        4200 : Permission insuffisante pour accéder au fichier
        4300 : Espace disque insuffisant
        4400 : Erreur de lecture ou écriture

    5000 - 5999 : Erreurs liées aux services tiers
        5000 : Service externe indisponible
        5100 : Problème de réponse d’un service tiers
        5200 : Temps de réponse trop long
        5300 : Autorisation refusée par le service externe
 -->
---
# Documentation des erreurs internes par services

| **Code d'erreur** | **Service**                | **Description**                                             | **Cause**                                                     | **Solution**                                                  |
|-------------------|----------------------------|-------------------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------|
| **10000**          | Authentification            | Erreur générale d'authentification                           | Problème non spécifié avec l'authentification                  | Contacter l'administrateur ou vérifier les logs               |
| **10001**          | Authentification            | Jeton invalide                                               | Jeton d'authentification expiré ou corrompu                    | Se réauthentifier pour obtenir un nouveau jeton               |
| **10002**          | Authentification            | Utilisateur non trouvé                                       | L'utilisateur avec les informations fournies n'existe pas      | Vérifier les informations d'identification                    |
| **10003**          | Authentification            | Mot de passe incorrect                                       | Mot de passe fourni incorrect                                  | S'assurer que le bon mot de passe est utilisé                 |
| **20000**          | API                         | Erreur générale de l'API                                     | Problème interne dans l'API                                    | Contacter le support technique                                |
| **20001**          | API                         | Point de terminaison non disponible                          | L'endpoint API est désactivé ou indisponible                   | Vérifier que l'API est active                                 |
| **20002**          | API                         | Requête malformée                                            | Les paramètres ou le format de la requête sont incorrects      | Vérifier les paramètres de la requête                         |
| **20003**          | API                         | Ressource introuvable                                        | L'ID ou la ressource demandée n'existe pas                     | Vérifier l'ID de la ressource et sa disponibilité             |
| **30000**          | Base de données             | Erreur générale de la base de données                        | Problème interne lié à la base de données                      | Vérifier les logs de la base de données                       |
| **30001**          | Base de données             | Connexion échouée                                            | Connexion à la base de données impossible                      | Vérifier les informations de connexion                        |
| **30002**          | Base de données             | Requête SQL invalide                                         | Syntaxe SQL incorrecte                                         | Vérifier la syntaxe de la requête SQL                         |
| **30003**          | Base de données             | Conflit de clé                                               | Violation de contrainte d'unicité ou de clé étrangère          | S'assurer que les clés respectent les contraintes             |
| **40000**          | Stockage de fichiers        | Erreur générale de stockage                                  | Problème interne lié au stockage                               | Vérifier les permissions et l'état du stockage                |
| **40001**          | Stockage de fichiers        | Fichier non trouvé                                           | Le fichier demandé est introuvable                             | S'assurer que le fichier existe et vérifier son chemin        |
| **40002**          | Stockage de fichiers        | Permission insuffisante                                      | L'utilisateur n'a pas les droits pour accéder au fichier       | Vérifier les permissions d'accès au fichier                   |
| **50000**          | Services tiers              | Service externe indisponible                                 | Le service externe est hors ligne ou en panne                  | Réessayer plus tard ou contacter le service externe            |
| **50001**          | Services tiers              | Erreur dans la réponse du service externe                    | Le service tiers a retourné une réponse invalide               | Vérifier la réponse et les logs du service externe            |
| **50002**          | Services tiers              | Temps de réponse trop long                                   | Temps de réponse du service externe trop long                  | Optimiser la requête ou envisager des délais de réponse plus longs |


## Erreurs Courantes

:::documentation
Aucune erreurs courante detecter.

Tu as une erreur non lister, fait le nous savoir de ce pas !!!!

[➡️Signaler une erreurs non listé⬅️](../support/contact.md)
:::

<!-- 
## Erreurs liées à la Base de Données (1000):
- **Erreur 1000: Un problème est survenu avec la base de données.**
  - **Description:** Cette erreur indique un problème général avec la base de données du site.
  - **Action recommandée:** Veuillez contacter l'administrateur du site.

## Erreurs liées à l'Authentification (2000):
- **Erreur 2000: Problème d'authentification.**
  - **Description:** Cette erreur survient lorsqu'il y a un problème avec le processus d'authentification.
  - **Action recommandée:** Vérifiez vos informations d'identification.

## Erreurs liées à la Validation des Données (3000):
- **Erreur 3000: Les données soumises ne sont pas valides.**
  - **Description:** Cette erreur indique que les données fournies ne satisfont pas aux critères de validation.
  - **Action recommandée:** Corrigez les champs marqués en rouge dans le formulaire.

## Erreurs liées à la Manipulation des Fichiers (4000):
- **Erreur 4000: Problème lors de la manipulation des fichiers.**
  - **Description:** Cette erreur survient lorsqu'il y a un problème avec la manipulation des fichiers.
  - **Action recommandée:** Vérifiez les autorisations et le format du fichier.

## Erreurs liées à la Configuration Serveur (5000):
- **Erreur 5000: Problème de configuration serveur.**
  - **Description:** Cette erreur indique un problème avec la configuration du serveur.
  - **Action recommandée:** Vérifiez les paramètres de configuration.

## Erreurs liées aux Cookies ou Sessions (6000):
- **Erreur 6000: Problème lié aux cookies ou sessions.**
  - **Description:** Cette erreur survient lorsqu'il y a un problème avec les cookies ou les sessions utilisateur.
  - **Action recommandée:** Réessayez après avoir effacé vos cookies ou reconnectez-vous.

## Erreurs de Timeout de Requête (7000):
- **Erreur 7000: La requête a expiré.**
  - **Description:** Cette erreur indique que la requête a pris trop de temps pour être traitée.
  - **Action recommandée:** Veuillez réessayer ultérieurement.

## Erreurs d'Épuisement des Ressources du Serveur (8000):
- **Erreur 8000: Épuisement des ressources du serveur.**
  - **Description:** Cette erreur survient lorsque le serveur atteint ses limites en termes de ressources.
  - **Action recommandée:** Veuillez contacter l'administrateur du site. -->


## Dépannage