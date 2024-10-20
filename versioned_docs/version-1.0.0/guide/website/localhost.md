---
sidebar_position: 3
description: Bien débuter avec son bot Discord
---

# Serveur Local
## Serveur Local avec XAMPP

XAMPP est un logiciel qui simplifie la création d'un environnement de développement web local sur votre propre ordinateur. Cela vous permet de tester et de développer des sites web sans avoir besoin d'une connexion Internet ou d'un serveur distant. Voici comment vous pouvez utiliser XAMPP pour mettre en place un serveur local :

### **Téléchargement et Installation** :

   - Rendez-vous sur le site officiel de XAMPP (https://www.apachefriends.org/index.html) et téléchargez la version appropriée pour votre système d'exploitation (Windows, macOS, Linux).
   - Suivez les instructions d'installation pour installer XAMPP sur votre ordinateur.

### **Démarrage des Services** :

   - Une fois XAMPP installé, ouvrez le programme.
   - Vous verrez une interface qui vous permet de démarrer et d'arrêter différents services tels que Apache (serveur web) et MySQL (base de données).
   - Cliquez sur les boutons "Start" à côté d'Apache et MySQL pour démarrer ces services.

### **Configuration** :

   - Une fois les services démarrés, vous pouvez accéder à votre serveur local en ouvrant un navigateur et en entrant l'URL `http://localhost` ou `http://127.0.0.1`.
   - Les fichiers de votre site web doivent être placés dans le dossier `htdocs` (situé dans le dossier d'installation de XAMPP).
   - Créez un sous-dossier pour votre projet et placez-y les fichiers. Ou placer les à la racine.

### **Test de Site Web** :

   - Placez vos fichiers HTML, CSS, JavaScript et autres dans le dossier approprié dans `htdocs`.
   - Accédez à votre site web local en entrant l'URL `http://localhost/nom-du-dossier` dans votre navigateur, où `nom-du-dossier` est le nom du sous-dossier que vous avez créé dans `htdocs`.

### Utilisation de la Base de Données :

   - XAMPP inclut également MySQL, une base de données populaire. Vous pouvez créer des bases de données et interagir avec elles via phpMyAdmin, un outil web inclus dans XAMPP.

### **Arrêt des Services** :

   - Lorsque vous avez terminé de travailler sur votre site, assurez-vous d'arrêter les services Apache et MySQL à partir de l'interface XAMPP.

L'utilisation de XAMPP pour un serveur local est idéale pour le développement et les tests, car elle vous permet de travailler sur votre site web sans avoir besoin d'une connexion Internet ni de déployer sur un serveur distant. Cependant, gardez à l'esprit que XAMPP est destiné à un environnement de développement et ne doit pas être utilisé pour héberger un site en production, car il peut ne pas être sécurisé de la même manière qu'un serveur web en production.

:::note
Assurez-vous de prendre des précautions de sécurité lors de l'utilisation de XAMPP sur votre ordinateur, car il peut être vulnérable aux attaques si vous ne prenez pas les mesures appropriées pour sécuriser votre environnement de développement.
:::