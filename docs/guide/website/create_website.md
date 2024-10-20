---
sidebar_position: 2
description: Bien débuter avec son bot Discord
---
# Crée son site

Passons à la création de notre site web !

:::caution

Pour commencer, nous n'utiliserons pas notre serveur local (vu dans les prérequis).

:::

### La structure du site HTML CSS JS

L'arborescence de dossiers que vous avez créée est un excellent point de départ pour la construction d'un site web simple utilisant HTML, CSS et JavaScript. Cette structure organisée vous aidera à garder vos fichiers bien rangés et faciles à gérer. Voici un aperçu détaillé de chaque élément dans cette arborescence :

```
my-website
├── index.html
├── styles
│   └── style.css
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
└── about.html
```

Explication de chaque dossier et fichier :

1. **my-website/**
    - C'est le dossier principal de votre projet, appelé communément la racine du site.

2. **index.html**
    - C'est la page d'accueil de votre site web.
    - Elle contient la structure HTML de base de votre site.

3. **styles/**
    - Ce dossier contient tous les fichiers CSS qui définissent le style visuel de votre site.

4. **styles/style.css**
    - C'est le fichier principal de styles pour votre site.
    - Vous pouvez définir les règles de style CSS ici pour personnaliser l'apparence de votre site.

5. **scripts/**
    - Ce dossier contient tous les fichiers JavaScript utilisés pour ajouter de l'interactivité à votre site.

6. **scripts/app.js**
    - C'est le fichier principal où vous pouvez écrire vos scripts JavaScript.
    - Vous pouvez ajouter des fonctionnalités interactives et dynamiques à votre site ici.

7. **assets/**
    - Ce dossier contient tous les fichiers multimédias et ressources utilisés sur votre site.

8. **assets/img/**
    - Ce sous-dossier contient toutes les images utilisées sur votre site, telles que des logos, des images de fond, etc.

9. **assets/favicon/**
    - Ce sous-dossier contient le favicon de votre site, qui est l'icône affichée dans l'onglet du navigateur.

10. **assets/svg/**
    - Ce sous-dossier peut contenir des fichiers SVG (scalable vector graphics) utilisés pour les icônes et autres éléments graphiques.

11. **assets/video/**
    - Ce sous-dossier contient des fichiers vidéo que vous pouvez intégrer à votre site.

12. **about.html**
    - C'est une autre page HTML de votre site, par exemple, une page "À propos".
    - Vous pouvez créer plusieurs pages HTML pour différentes sections de votre site.

En suivant cette structure d'arborescence, vous pouvez commencer à développer votre site web de manière organisée et efficace. Vous pouvez ajouter davantage de dossiers ou de fichiers en fonction de la complexité de votre projet, mais cette base vous aidera à démarrer sans confusion.

## La première page

### HTML : baliser votre site

Commencez par créer un fichier "index.html" dans Visual Studio Code :

```html
html:5
```

![](/img/Pasted_image_20230823205025.png)

Appuyez sur "Entrer", et cette structure sera créée :

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>
```

Cela constitue la base d'une page HTML. Vous pouvez désormais commencer à ajouter du contenu à l'intérieur des balises `<body>` pour construire votre site web.

les balises HTML sont les éléments de base qui structurent et définissent le contenu d'une page web. Chaque balise a une fonction spécifique et peut contenir d'autres balises ou du texte. Voici quelques balises HTML couramment utilisées, ainsi que leurs fonctions :

-  `<html>` : Cette balise englobe tout le contenu HTML de la page. Elle indique au navigateur que le document est écrit en HTML. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/html)
    
-  `<head>` : Cette balise contient des métadonnées sur la page, telles que le titre de la page, les liens vers les fichiers de style et de script, etc. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/head)
    
-  `<meta>` : Utilisée dans la section `<head>` pour spécifier des métadonnées comme l'encodage du caractère et les informations de la vue du port. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta)
    
-  `<title>` : Définit le titre de la page, qui est affiché dans l'onglet du navigateur. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/title)
    
-  `<link>` : Utilisé pour lier des fichiers externes tels que des feuilles de style CSS. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/link)
    
-  `<script>` : Utilisé pour lier des scripts JavaScript ou d'autres fichiers de script. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/script)
    
- `<body>` : Contient le contenu visible de la page, y compris le texte, les images, les vidéos, etc.
    
- `<h1>`, `<h2>`, `<h3>`, ... `<h6>` : Balises de titre (niveaux de titres), utilisées pour hiérarchiser et structurer le texte. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements)
    
- `<p>` : Balise de paragraphe, utilisée pour afficher des paragraphes de texte. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/p)
    
- `<a>` : Balise de lien, utilisée pour créer des liens vers d'autres pages ou ressources. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)
    
- `<img>` : Balise d'image, utilisée pour insérer des images dans la page. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/img)
    
- `<ul>` : Balise de liste non ordonnée, utilisée pour créer des listes à puces. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul)
    
- `<ol>` : Balise de liste ordonnée, utilisée pour créer des listes numérotées. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol)
    
- `<li>` : Balise d'élément de liste, utilisée à l'intérieur de `<ul>` ou `<ol>` pour définir chaque élément de la liste. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li)
    
- `<div>` : Utilisée pour diviser la page en sections ou conteneurs, souvent utilisés pour appliquer des styles ou des scripts à un groupe d'éléments. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/div)
    
- `<span>` : Utilisée pour appliquer des styles ou des scripts à une partie spécifique du texte. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/span)
    
- `<form>` : Utilisée pour créer des formulaires interactifs permettant aux utilisateurs d'entrer des données. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/form)
    
- `<input>` : Balise utilisée dans les formulaires pour permettre à l'utilisateur de saisir des données. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input)
    
- `<textarea>` : Balise de zone de texte, utilisée pour saisir du texte sur plusieurs lignes. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea)
    
- `<button>` : Balise de bouton, utilisée pour créer des boutons interactifs. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/button)
    
- `<iframe>` : Balise utilisée pour incorporer d'autres pages web ou contenus dans une page. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe)
    
- `<br>` : Balise de saut de ligne, utilisée pour insérer un saut de ligne simple. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/br)
    
- `<hr>` : Balise de séparation horizontale, utilisée pour insérer une ligne de séparation. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr)
    
- `<strong>` : Balise de texte en gras. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong)
    
- `<em>` : Balise de texte en italique. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/em)
    
- `<blockquote>` : Balise pour les citations longues ou les blocs de texte. [Plus d'info](https://developer.mozilla.org/fr/docs/Web/HTML/Element/blockquote)
    

Ces balises constituent une petite sélection des éléments HTML couramment utilisés. Chacune d'entre elles joue un rôle spécifique dans la structuration, le formatage et l'interactivité d'une page web.


Passons maintenant à l'ajout de styles à notre site web en utilisant CSS (Cascading Style Sheets). Les styles CSS permettent de définir l'apparence visuelle de votre site, en contrôlant les couleurs, les polices, la mise en page et bien plus encore. Voici comment fonctionne le CSS et comment vous pouvez l'intégrer dans votre projet :

### CSS : Ajouter du style à votre site

Les feuilles de style en cascade (CSS) sont utilisées pour contrôler la présentation visuelle des éléments HTML sur votre site web. Vous pouvez définir les styles dans des fichiers séparés, ce qui permet de séparer la structure du contenu (HTML) de la présentation visuelle (CSS). Voici comment cela fonctionne :

1. **Création du fichier de style** : Dans le dossier "styles" de votre projet, vous avez un fichier nommé "style.css". C'est ici que vous allez définir tous vos styles.

2. **Lier le fichier de style à la page HTML** : Dans la balise `<head>` de votre fichier "index.html", vous pouvez ajouter un lien vers votre fichier CSS. Utilisez la balise `<link>` comme ceci :
   
   ```html
   <link rel="stylesheet" href="styles/style.css">
   ```

   Cela permet à votre page HTML d'accéder au fichier de style CSS et d'appliquer les règles de style définies.

3. **Écrire des règles de style** : Dans le fichier "style.css", vous pouvez définir des sélecteurs (les éléments HTML auxquels vous voulez appliquer le style) et des propriétés (les aspects du style que vous voulez définir, comme la couleur, la taille de la police, etc.). Voici un exemple simple :

   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f0f0f0;
   }

   h1 {
       color: blue;
   }
   ```

   Dans cet exemple, toutes les balises `<h1>` auront un texte de couleur bleue, et le corps de la page aura une police Arial et un arrière-plan gris clair.

4. **Appliquer le style** : Une fois que vous avez écrit vos règles de style dans le fichier CSS, elles seront automatiquement appliquées aux éléments correspondants dans votre page HTML. Par exemple, toutes les balises `<h1>` auront maintenant une couleur bleue.

CSS offre une grande flexibilité pour personnaliser l'apparence de votre site. Vous pouvez cibler des éléments spécifiques, des classes ou des IDs pour appliquer des styles uniques. Il existe également des propriétés de mise en page qui vous permettent de contrôler la position et la disposition des éléments sur la page.

En suivant cette approche, vous pouvez créer des designs attrayants et cohérents pour votre site web tout en maintenant une séparation claire entre la structure HTML et la présentation visuelle CSS.

Pour en savoir plus sur CSS et ses propriétés, consultez les ressources sur [MDN CSS](https://developer.mozilla.org/fr/docs/Web/CSS).


Bien sûr, passons à l'ajout de l'interactivité à votre site web en utilisant JavaScript (JS). JavaScript est un langage de programmation de scripts utilisé pour ajouter des fonctionnalités dynamiques à vos pages web. Voici comment vous pouvez intégrer JavaScript dans votre projet :

### JavaScript : Ajouter de l'interactivité à votre site

JavaScript est utilisé pour rendre votre site web interactif en permettant aux utilisateurs d'effectuer des actions, de répondre à des événements et de manipuler le contenu en temps réel. Voici comment l'intégrer à votre projet :

1. **Création du fichier de script** : Dans le dossier "scripts" de votre projet, vous avez un fichier nommé "app.js". C'est ici que vous allez écrire votre code JavaScript.

2. **Lier le fichier de script à la page HTML** : Dans la balise `<head>` de votre fichier "index.html", vous pouvez ajouter un lien vers votre fichier JavaScript. Utilisez la balise `<script>` comme ceci :

   ```html
   <button id="my-button"></button>
   <script src="scripts/app.js"></script>
   ```

   Cela permet à votre page HTML d'accéder au fichier de script JavaScript et d'exécuter le code qu'il contient.

3. **Écrire des scripts JavaScript** : Dans le fichier "app.js", vous pouvez écrire des scripts qui réagissent aux événements, manipulent le contenu de la page et effectuent des calculs. Voici un exemple simple :

   ```javascript
   // Sélectionnez un élément par son ID et changez son texte au clic
   const myButton = document.getElementById('my-button');
   myButton.addEventListener('click', () => {
       myButton.textContent = 'Clic effectué !';
   });

   // Calculez et affichez la somme de deux nombres
   const num1 = 5;
   const num2 = 10;
   const sum = num1 + num2;
   console.log('La somme est :', sum);
   ```

   Dans cet exemple, lorsque l'utilisateur clique sur le bouton avec l'ID "my-button", le texte du bouton change pour indiquer que le clic a été effectué. Ensuite, le script calcule la somme de deux nombres et l'affiche dans la console du navigateur.

4. **Intégrer des scripts dans la page** : Vous pouvez également intégrer des scripts directement dans la page HTML en utilisant des balises `<script>` :

   ```html
   <button id="my-button"></button>
   
   <script>
       // Votre code JavaScript ici
   </script>
   ```

   Cependant, il est recommandé d'utiliser des fichiers de script externes (comme "app.js") pour maintenir une séparation claire entre le contenu HTML et le code JavaScript.

JavaScript offre une grande flexibilité pour ajouter des fonctionnalités interactives à votre site. Vous pouvez réagir aux clics, aux soumissions de formulaire, aux mouvements de souris et bien plus encore. Vous pouvez également manipuler le contenu HTML, modifier les styles, interagir avec des API externes et gérer des animations.

Pour en savoir plus sur JavaScript et ses fonctionnalités, consultez les ressources sur [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript).

### Exemples de Templates

Voici quelques liens vers des exemples de templates de sites web que vous pouvez utiliser comme point de départ pour votre projet :

1. [Template Simple et Élégant](https://example-template.com/simple-elegant) : Un template minimaliste avec un design élégant, parfait pour une page de portfolio.

2. [Template Blog Moderne](https://example-template.com/modern-blog) : Un template pour un blog moderne avec des mises en page variées et une typographie accrocheuse.

3. [Template Page d'Accueil d'Entreprise](https://example-template.com/company-homepage) : Un template professionnel pour la page d'accueil d'une entreprise, mettant en avant ses services et son équipe.

### Tutoriels

Voici quelques tutoriels fictifs pour vous aider à apprendre les bases du développement web :

1. [Tutoriel HTML pour Débutants](https://example-tutorial.com/html-beginners) : Apprenez les bases de HTML, des balises aux éléments de structure, en créant une page simple.

2. [CSS : Introduction aux Styles](https://example-tutorial.com/css-intro) : Découvrez comment ajouter du style à votre site web avec CSS, en personnalisant les couleurs, les polices et la mise en page.

3. [JavaScript Interactif : Boutons Cliquables](https://example-tutorial.com/js-buttons) : Explorez les fondamentaux de JavaScript en créant des boutons interactifs qui changent le texte lorsqu'ils sont cliqués.

4. [Création d'une Galerie d'Images avec CSS Grid](https://example-tutorial.com/css-grid-gallery) : Apprenez à utiliser CSS Grid pour créer une mise en page de galerie d'images moderne et réactive.

5. [Formulaire de Contact HTML avec Validation](https://example-tutorial.com/contact-form) : Créez un formulaire de contact en HTML avec des champs de saisie et une validation simple en JavaScript.

Ces liens sont fictifs, mais ils illustrent comment vous pourriez trouver des ressources en ligne pour apprendre et explorer davantage le développement web. N'hésitez pas à rechercher des exemples de templates et des tutoriels réels sur des sites tels que [Codecademy](https://www.codecademy.com/), [MDN Web Docs](https://developer.mozilla.org/), [W3Schools](https://www.w3schools.com/), et [CSS-Tricks](https://css-tricks.com/).