---
sidebar_position: 5
slug: rex
---
# Bot Support (REX)

![](/img/rex-banner.png)

Bienvenue dans la documentation complète du bot de support nommé **Rex#8093**.

## Présentation

Rex a été conçu il y a plusieurs années dans le but de créer une expérience utilisateur enrichissante. L'objectif principal du bot est de faciliter la communication et l'interaction entre le serveur de support et les différents services proposés. Son nom, Rex, a été choisi pour apporter une touche d'humanité et créer un lien plus étroit avec les utilisateurs.

### Fonctionnalités Principales

- **Système de Niveaux :** Rex propose un système de niveaux qui permet aux utilisateurs de suivre leur progression sur le serveur. Il offre également la possibilité d'afficher le niveau d'autres utilisateurs.

- **Économie Virtuelle (Perlims) :** Le bot gère une économie virtuelle avec une monnaie appelée "Perlims". Les utilisateurs peuvent consulter leur solde, effectuer des transactions entre eux et visualiser le top 10 des utilisateurs les plus riches. [Voir plus d'information sur les Perlims](perlims)

### Informations Techniques

- **Version Actuelle :** [v1.0.0-beta](#v100-beta)

- **Changements Récents :** [Changements](#changelogs)

- **Statuts en Temps Réel :** [Statuts](https://stats.uptimerobot.com/JgP0wcpgzj)

## Commandes

Rex propose une variété de commandes pour offrir une expérience utilisateur complète. Voici quelques-unes des commandes disponibles :

### Commandes Informatives

- `!utilisateur info [@user]` : Affiche les informations d'un utilisateur.

### Commandes pour les Niveaux

- `!niveau [@user]` : Affiche le niveau d'un utilisateur.
- `!top niveau [int <= 10]` : Affiche le top 10 des utilisateurs selon leur niveau.

### Commandes pour les Perlims

- `!top perlim [int <= 10]` : Affiche le top 10 des utilisateurs les plus riches en Perlims.
- `!balance [@user]` : Affiche le solde d'un utilisateur.
- `!transaction <@user> <montant>` : Permet à un membre de donner de l'argent à un autre.
- `!transactions` : Affiche toutes les transactions effectuées.

## Commandes Contextuelles

Rex propose également des commandes contextuelles pour interagir avec les utilisateurs et les messages :

### Sur les Utilisateurs

- **Afficher les Informations :** Clic droit sur un membre > "Afficher les informations".
- **Signaler un Membre :** Clic droit sur un membre > "Signaler".

### Sur les Messages

- **Signaler un Message :** Clic droit sur un message > "Signaler".

## Dépannage

En cas de problème, veuillez ouvrir un ticket ou envoyer un e-mail à [webmaster@project-maker.fr](mailto:webmaster@project-maker.fr). Nous vous encourageons à nous informer si le bot est éteint sans raison apparente.

:::changementsmajeurs En cas de pannes
Si vous trouvez le bot éteint sans justification de mise à jour de notre côté, veuillez nous prévenir en ouvrant un ticket !
:::

## Changelogs

### v1.0.0-beta

**Date :** 2024-20-10  
**Mis à jour par :** [@leo-lb29](https://github.com/leo-lb29)

#### 🚀 Nouvelles Fonctionnalités
- Ajouts commandes

#### 🐛 Correction des Bugs
- Changement API pour réduire les latences

#### 💅 Améliorations Esthétiques
- Refonte visuel des commandes, du logo et de la bannière par @Merfox-fire

#### 🔧 Maintenance
- Aucune