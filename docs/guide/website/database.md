---
title: Gestion de Base de Données avec XAMPP et PHP
---

# Gestion de Base de Données avec XAMPP et PHP

Une base de données est essentielle pour stocker et gérer les données d'un site web, comme les informations des utilisateurs ou les articles de blog. XAMPP est un ensemble de logiciels qui vous permet de créer un environnement de développement local avec un serveur web et une base de données sur votre ordinateur. Voici comment utiliser XAMPP avec PHP pour gérer efficacement les données.

## Étape 1 : Installation de XAMPP et Composer

Installez XAMPP en téléchargeant depuis [le site officiel](https://www.apachefriends.org/fr/index.html). Vous aurez également besoin de Composer, un outil pour gérer les dépendances PHP. Consultez les [prérequis](docs/Guide/Site%20Web/prerequis.md) pour l'installation.

## Étape 2 : Création de la Base de Données

Accédez à `http://localhost/phpmyadmin` dans votre navigateur pour gérer la base de données. Créez une nouvelle base de données et les tables nécessaires.

## Étape 3 : Structuration des Fichiers

Organisez vos fichiers dans le dossier `htdocs` de XAMPP (généralement `C:/xampp/htdocs`). Voici une structure recommandée :

```
my-website
├── index.php
├── config
│   ├── .env
│   └── dbcon.php
├── include
│   ├── header.php
│   └── footer.php
├── scripts
│   └── app.js
├── assets
│   ├── img
│   │   ├── logo.png
│   │   └── background.jpg
│   ├── favicon
│   │   └── favicon.icon
│   ├── svg
│   │   └── icon.svg
│   └── video
│       └── ma_super_video.mp4
└── about.php
```

## Étape 4 : Installation de Dotenv avec Composer

Dotenv simplifie la gestion des configurations en chargeant les variables d'environnement depuis un fichier `.env`. Installez-le avec Composer :

1. Créez `.env` dans le dossier de configuration avec vos variables (voir exemple dans le guide).
2. Installez Dotenv avec la commande :

   ```bash
   composer require vlucas/phpdotenv
   ```

## Étape 5 : Connexion à la Base de Données avec PHP

Utilisez PHP pour établir la connexion :

```php
<?php
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['HOST'];
$username = $_ENV['USERNAME'];
$password = $_ENV['PASSWORD'];
$database = $_ENV['DATABASE'];

$con = mysqli_connect($host, $username, $password, $database);

if (!$con) {
    echo "Une erreur est survenue : " . mysqli_connect_error();
    die();
}
?>
```

## Étape 6 : Exécution de Requêtes SQL

Exécutez des requêtes SQL pour interagir avec la base de données. Voici des exemples d'insertion et de sélection de données. (Voir guide pour exemples complets.)

## Étape 7 : Exemple de Page PHP

Voici un exemple de page PHP pour afficher des articles et leurs prix dans un tableau. (Voir guide pour le code complet.)

```php
<?php
include_once "vendor/autoload.php";
include_once "config/dbcon.php";

$query = "SELECT * FROM articles";
$result = mysqli_query($con, $query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Articles</title>
</head>
<body>

<h1>Liste des Articles</h1>

<table border="1">
    <tr>
        <th>ID</th>
        <th>Nom de l'article</th>
        <th>Prix</th>
    </tr>
    <?php
    // Parcourir les résultats de la requête
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['nom'] . "</td>";
        echo "<td>" . $row['prix'] . "</td>";
        echo "</tr>";
    }
    ?>
</table>

</body>
</html>

<?php
// Fermer la connexion à la base de données
mysqli_close($con);
?>
```

Consultez les ressources sur [PHP et MySQL](https://www.php.net/manual/en/book.mysql.php) pour en savoir plus sur la gestion de bases de données avec PHP.