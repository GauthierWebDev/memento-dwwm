[Retourner à l'accueil du référentiel 2018](./index.md)

# Les différentes AT et CP

Après toute la théorie autours du TP, il est temps de parler des AT _(Activités Types)_ !  
Ces différentes AT permettent de regrouper les notions back-end et front-end, à travers les CP _(Compétences Professionnelles)_.

Encore une fois, je me permets un rappel très important :  
Ce repo n'a pas pour but d'être exhaustif sur toutes les attentes du référentiel, mais de synthétiser ces dernières.  
N'hésite pas à lire chaque fichier _(REAC et RC)_ pour consolider ta compréhension du référentiel et t'assurer une meilleure chance de réussite lors de votre soutenance.

Pour le titre DWWM, les AT sont les suivantes :

- [AT 1 - Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité](#at-1---développer-la-partie-front-end-dune-application-web-ou-web-mobile-en-intégrant-les-recommandations-de-sécurité)
  - [CP 1 - Maquetter une application](#cp-1---maquetter-une-application)
  - [CP 2 - Réaliser une interface utilisateur web statique et adaptable](#cp-2---réaliser-une-interface-utilisateur-web-statique-et-adaptable)
  - [CP 3 - Développer une interface utilisateur web dynamique](#cp-3---développer-une-interface-utilisateur-web-dynamique)
  - [CP 4 - Réaliser une interface utilisateur avec une solution de gestion de contenu ou ecommerce](#cp-4---réaliser-une-interface-utilisateur-avec-une-solution-de-gestion-de-contenu-ou-ecommerce)
- [AT 2 - Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité](#at-2---développer-la-partie-back-end-dune-application-web-ou-web-mobile-en-intégrant-les-recommandations-de-sécurité)
  - [CP 5 - Créer une base de données](#cp-5---créer-une-base-de-données)
  - [CP 6 - Développer les composants d'accès aux données](#cp-6---développer-les-composants-daccès-aux-données)
  - [CP 7 - Développer la partie back-end d'une application web ou web mobile](#cp-7---développer-la-partie-back-end-dune-application-web-ou-web-mobile)
  - [CP 8 - Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce](#cp-8---élaborer-et-mettre-en-œuvre-des-composants-dans-une-application-de-gestion-de-contenu-ou-e-commerce)

## AT 1 - Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité

Il est important de noter que cette AT ne concerne que le front-end, pas le back-end.
Dans cette AT, il te faudra expliquer les différentes étapes de conception et de développement d'une application côté front.

Si tu souhaites en savoir plus sur cette AT, je t'invite fortement à lire les pages 9 et 10 du REAC :

> [REAC _(03/05/2018)_, pages 9 et 10 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Allez, rentrons dans le détail de ses CP !

### CP 1 - Maquetter une application

> [REAC _(03/05/2018)_, pages 13 et 14 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Dans cette CP, tu devras démontrer tes compétences sur la conception du front, à savoir :

- la réalisation d'un cahier des charges
- la conception de wireframes avec commentaires (vues desktop et mobile), réalisés à partir des user-stories
  - https://fr.wikipedia.org/wiki/Wireframe_(design)
  - https://www.atlassian.com/fr/agile/project-management/user-stories
- Arborescence des pages
  - https://www.gloomaps.com/

Comme tu peux le remarquer, ici il n'est pas question de code, mais de la conception du front 😉

### CP 2 - Réaliser une interface utilisateur web statique et adaptable

> [REAC _(03/05/2018)_, pages 15 et 16 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Ça y est, on peut enfin démarrer le code !  
À cette étape, on ne parle encore que d'interface statique, c'est-à-dire sans Javascript pour dynamiser le DOM.

Pour résumer : HTML et CSS uniquement !  
_Alors c'est bien, mais j'ai fait mon projet avec une bibliothèque JS (React, Vue, etc), du coup je fais comment ?_

Effectivement, la CP 2 demande que ce soit statique et ces technologies rendent d'office ton application dynamique...
Mais dis-toi que tu as un dossier professionnel qui doit contenir des projets dont tu n'en feras pas la présentation face à ton jury !
Libre à toi de créer des projets, te baser sur ce qui a été fait en formation ou en entreprise pour compléter cette CP 😉

Maintenant que tu as trouvé un contenu qui permet de valider la partie statique, il va également falloir t'assurer qu'elle soit adaptable !
Par adaptable, on entend responsive, c'est-à-dire que l'application s'adapte à tous les écrans, même ceux qui ne sont pas des écrans _(pour l'impression par exemple)_.

Tu ne vois pas de quoi je parle ? Alors ces ressources sont à lire avec attention :

- https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design
- https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries

Allez, c'est presque terminé pour cette CP, accroche-toi !

Si on résume ce que tu as actuellement sous la main, tu as déjà fait :

- Une page avec **uniquement** du HTML et du CSS
- Cette même page est responsive, elle est consultable à partir de n'importe quelle résolution d'écran

Il ne reste alors qu'un seul détail à mettre en place : le référencement !

Heureusement on ne te demande pas d'être un expert SEO, mais de maîtriser la sémantique et son impact sur le référencement.
Si ta page est remplie de `<div>` et de `<span>`, tu peux être sûr que ton jury va te poser beaucoup de questions sur la sémantique.
Pourquoi ? Parce que ces deux balises n'ont aucun impact sur le référencement, rendant une page difficilement référençable et que ton jury a besoin de savoir si tu maîtrises ou non la sémantique.

Ça te fait un peu peur tout ça ? Il est probable qu'entre le jour où tu lis ces lignes et le jour de ta soutenance que tu n'aies pas le temps de faire toutes les modifications sur ton site : **ce n'est pas grave !**  
Bien sûr, il est préférable que les projets illustrés et présentés dans ta soutenance contiennent toutes ces notions et bonnes pratiques, mais tu peux très bien te baser sur tes connaissances et pas seulement sur ce qui a déjà été réalisé.

> **Note :** Si tu utilises des balises pour le style par défaut du navigateur, c'est une très mauvaise pratique.  
> Si tu cherches à rendre un texte gras, mais que ce texte n'est pas capital, tu peux utiliser `font-weight: bold;` en CSS plutôt que la balise `<strong>`.

### CP 3 - Développer une interface utilisateur web dynamique

> [REAC _(03/05/2018)_, pages 17 et 18 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Et maintenant que tout est fait pour la partie statique, il va falloir mettre en place une partie dynamique !

_Mais comment je peux faire ET du statique, ET du dynamique ?_  
Eh bien... Pas de panique, c'est très simple !

Il est vrai que j'ai beaucoup insisté sur la non-présence de Javascript pour la CP 2, ce qui est partiellement juste.  
En réalité, toutes les pages peuvent avoir du Javascript sans souci, mais il est important de ne pas parler de Javascript dans la partie statique.

Par contre, vu qu'ici on parle de la CP 3 et donc de contenu dynamique, Javascript prend toute son importance !  
Tu peux tout à fait te baser sur la même page que la précédente et parler maintenant des interactions utilisateurs 😉

Petit rappel : En dehors de l'aspect statique, la CP 3 se base sur tous les points de la CP 2, donc référencement et responsive !

> **Note :** Peut-être que tu utilises également une bibliothèque comme `React`, `Vue`.  
> Il est important de prendre en compte le fait qu'elles agissent sur le DOM, mais n'injectent pas de HTML dans la page.  
> De ce fait, ton application ne sera pas très bien référencée puisque le contenu de la page sera altéré **après** le chargement du script JS.  
> Toutefois il y a deux solutions : SSR _(Server Side Rendering)_ et SSG _(Static Site Generating)_.
>
> - https://www.gatsbyjs.com/
> - https://nextjs.org/

Libre à toi de choisir quelles interactions tu souhaites mettre en avant, un simple événement au clic d'un bouton correspond totalement aux attentes.  
Toutefois, même si cette interaction couvre le référentiel, je te conseille d'en montrer plusieurs pour donner plus de matière à ton jury.

Si tu as également fait des requêtes AJAX dans ton projet, c'est le moment d'expliquer en détail le cheminement d'actions utilisateur à réaliser, avec le cheminement de la donnée côté front !

> Par exemple pour un formulaire de connexion avec React :
>
> 1. L'utilisateur rempli un formulaire de connexion au travers de champs `<input>`, contrôlés par des states _(`useState()`)_.
> 2. L'utilisateur soumet ce formulaire _(`addEventListener` sur le formulaire, pour l'événement `submit`)_.
> 3. Dans le callback de ce eventListener, on bloque le fonctionnement par défaut du formulaire avec `preventDefault()`.
> 4. À la suite, la fonction fait une requête AJAX avec `fetch()`, dans laquelle on transmet les données du formulaire au format JSON.
> 5. La requête part avec la méthode POST, on attend une réponse de l'API consommée dans un `then()`.
> 6. On a obtenu une réponse, on regarde d'abord le status HTTP de la réponse.
>    1. Si le status HTTP est 200, on récupère le JWT et on le stocke dans un cookie, puis on donne la valeur `true` au state `isConnected`.
>    2. Si le status HTTP n'est pas 200, on affiche un message d'erreur.
>
> N'hésite pas à utiliser des captures d'écran de code pour montrer les étapes de l'exemple !  
> Si tu utilises VSCode comme éditeur de code, tu as l'extension [SnapCode](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap) qui permet de faire des captures d'écran de code rapidement.

### CP 4 - Réaliser une interface utilisateur avec une solution de gestion de contenu ou ecommerce

> [REAC _(03/05/2018)_, pages 19 et 20 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Ici, on parle uniquement de la création d'un thème custom sur un CMS et/ou d'un ecommerce.  
Comme je ne suis pas très calé sur cette partie, je te conseille de lire **très attentivement** la ressource liée plus haut dans cette CP.

Bien que cette CP fasse partie intégrante du référentiel DWWM, elle n'empêche pas une validation du titre professionnel 😅
Il ne faut pas non plus la négliger pour autant, mais si tu as suivi une formation qui s'est focalisée sur NodeJS et aucun autre langage comme PHP, il est très peu probable que tu puisses expliquer comment fonctionne Wordpress pour la création d'un thème custom.

Alors il y a bien la solution [Strapi](https://strapi.io/) qui existe, mais il s'agit d'une solution headless, c'est-à-dire sans interface utilisateur.  
Comme cette CP s'appuie sur le moteur propre du CMS, créer une interface pour un CMS headless ne couvre pas le référentiel... _(du moins pour le moment, peut-être que le référentiel sera mis à jour !)_

> **Anecdote personnelle et information sur les CMS :** De mon côté, lors de ma soutenance, je n'ai pas parlé de la CP 4 et 8, ce qui ne m'a pas empêché de valider mon TP.  
> Pourquoi et comment ça se fait ? Eh bien ton jury se doit de confirmer tes compétences et connaissances essentielles dans le métier de développeur.  
> Si selon ton jury, tu as toutes les connaissances nécessaires pour assurer tes missions de développeur, nul besoin de te refuser la validation du TP sous prétexte que tu ne sais pas faire un thème custom avec Wordpress.
>
> Il n'est pas obligatoire de connaître Wordpress pour être un bon développeur après tout ! Par contre, cela fait partie de ta veille technique alors essaye d'avoir au moins des connaissances sur le sujet d'un point de vue culturel et professionnel.

## AT 2 - Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité

Maintenant qu'on a parlé du front, il est temps de parler du back !

Mais avant toute chose, je refais le relou de service en te recommandant chaudement de filer sur le REAC pour en savoir plus sur cette AT 🤓

> [REAC _(03/05/2018)_, pages 9 et 10 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

### CP 5 - Créer une base de données

> [REAC _(03/05/2018)_, pages 21 et 22 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Je pense que les mots sont dits : il faut créer une base de données 🙃  
OK, c'est vrai que si on part de ce principe, la CP est vite complétée et on passerait à la CP 6 de suite, mais ça va plus loin en réalité !

Comme pour la CP 1, on va avant toute chose parler de la conception, soit :

- MCD _(Modèle Conceptuel des Données)_
- MLD _(Modèle Logique des Données)_
- MPD _(Modèle Physique des Données)_
- DdD _(Dictionnaire des Données)_

Bien qu'il existe des outils qui permettent de créer des MCD assez facilement _([MoCoDo](http://mocodo.wingi.net/) par exemple)_, tu peux très bien faire un MCD à la main, sur un papier !

> **Note :** MoCoDo ne permet pas de vérifier si la structure du MCD est correcte, il faudra alors être sûr de la validité de la structure du MCD.

Une fois que tous ces documents sont créés, tu peux passer sans souci à la CP 6 !

### CP 6 - Développer les composants d’accès aux données

> [REAC _(03/05/2018)_, pages 23 et 24 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Maintenant que tu connais la structure de ta base de données et qu'elle est créée, il va falloir expliquer comment ton application pourra accéder aux données stockées.  
En PHP, tu connais certainement [PDO](https://www.php.net/manual/fr/book.pdo.php), mais tu as peut-être également utilisé un ORM comme [Eloquent](https://laravel.com/docs/9.x/eloquent) ou encore [Doctrine](https://symfony.com/doc/current/doctrine.html).

Côté NodeJS, tu pourras également retrouver par exemple [Sequelize](https://sequelize.org/master/manual/getting-started.html) ou encore le query builder [Knex](https://knexjs.org/).

L'idée ici est d'expliquer comment le back va se connecter à la base de données **ET** comment le back est structuré pour accéder aux données.

Tu vas donc avoir très certainement avoir besoin de parler des services et des modèles qui permettent d'accéder aux données et de les altérer.

Comme cette CP _(et les suivantes)_ parlent de sécurité, c'est l'occasion de parler de ton fichier `.env` et du `.gitignore` afin de ne pas avoir de fichiers sensibles dans le repo de ton projet, dont les informations de connexion à la base de données.

> **Note :** Si tu utilises un query builder, attention à bien comprendre ce qu'il fait et d'être en mesure d'expliquer quelle sera la requête SQL générée par le query builder.  
> Ton jury souhaite que tu maîtrises les requêtes SQL, pas de maîtriser un outil qui fait les requêtes à ta place _(même si ça a un intérêt)_ !

### CP 7 - Développer la partie back-end d’une application web ou web mobile

> [REAC _(03/05/2018)_, pages 25 et 26 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

En continuité avec la CP 6, tu vas devoir maintenant expliquer comment circule la donnée dans le back de ton application, que ce soit une API ou que ton back serve des pages web.

Concrètement, voici ce qu'il faut couvrir :

- Les routes et endpoints _(back uniquement !)_
- Les middlewares _(vérification JWT, accès protégé à un rôle particulier, etc)_
- Les controllers
- La récupération des données saisies par l'utilisateur _(avec une mise en place de la sécurité en y intégrant des vérifications et filtres)_
- La récupération des données stockées dans la base de données et l'altération des données
- Le formatage de ces données récupérées
- Le retour de ces données au front _(JSON, variables données à une vue servie par le back, etc)_

### CP 8 - Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce

> [REAC _(03/05/2018)_, pages 27 et 28 sur 38](https://www.banque.di.afpa.fr/EspaceEmployeursCandidatsActeurs/EGPResultat.aspx?ct=01280m03&type=t)

Hop hop, je me dédouane de nouveau pour la CP 8 !
Il s'agit d'une CP qui concerne, tout comme la CP 4, le développement par le biais d'un CMS.

Pour prendre Wordpress en exemple, il est nécessaire ici de **développer** des fonctionnalités **additionnelles** à celles qui existent déjà.  
Pour résumer une possibilité : la création d'un plugin.

Cette fois-ci, [Strapi](https://strapi.io/) peut totalement être utilisé pour valider cette CP ! 🎉

---

[Retourner à l'accueil du référentiel 2018](./index.md)
