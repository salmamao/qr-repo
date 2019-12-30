# Test technique - React - NodeJS
### Développer un mini jeu " Question / Réponses " OUI ou NON
Dans ce test technique, l’application ReactJs permet de charger plusieurs questions depuis le **Back-End** (développé en NodeJS en utilisant une base de données **NoSQL Firestore (Security Rules en mode test / allow read & write)**).
Ensuite au moment où l’utilisateur choisi l’une des deux réponses (**Oui** ou **Non**), une validation est faite côté **Back-End**, c'est à dire que selon la réponse choisie par l’utilisateur, une réponse adéquate à cette validation est envoyée au 
Serveur distant **(Cloud Functions Firebase)** en utilisant **Http Cloud Functions** (Requête HTTP avec **Axios**).

### Création du projet
Cette application ReactJs à été développée en installant le paquet `create-react-app` avec la commmande: 
```sh
$ npx create-react-app qr-repo
```
Ce paquet configure Babel et génère automatiquement un set de règles ESLint, il crée aussi 4 scripts exécutables via npm ou yarn :

* `npm run start` – permet de lancer l’application sur le port 3000 de la machine.
* `npm run build` – génère dans un dossier build, situé à la racine du projet, une version de l’application optimisée pour la livraison sur le serveur web.
* `npm run test` – va exécuter tout les tests (fichiers se terminant par `.test.js`) **Jest**.
* `npm run eject` – permet d’éjecter l'application et revenir vers une version où on a tout le contrôle des fichiers de configuration webpack, babel et ESLint..

### Installation
Après avoir cloné le projet `git clone`, il faut lancé la commande: 
```sh
$ npm install
```
puis démarrer l'application en lançant la commande : 
```sh
$ npm run start
```
l'application est démarrée sur le port 3000 avec l'url : `http://localhost:3000` dans le navigateur.
