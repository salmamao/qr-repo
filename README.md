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
Après avoir cloné le projet `git clone`, il faut lancer la commande: 
```sh
$ npm install
```
puis démarrer l'application en lançant la commande : 
```sh
$ npm run start
```
l'application est démarrée sur le port 3000 avec l'url : `http://localhost:3000` dans le navigateur.

### Prises d'écran 
**La page d'acceuil de l'application:**
<img width="800" alt="screenshot1" src="https://user-images.githubusercontent.com/21684428/71585620-868f4580-2b17-11ea-80fc-6fa1afde2dab.png">

**La page de listing des questions:**
<img width="800" alt="screenshot2" src="https://user-images.githubusercontent.com/21684428/71585935-98bdb380-2b18-11ea-85e1-fde171dc2c11.png">

**La page de réponse à une question:**
<img width="1440" alt="Screen Shot 2019-12-30 at 15 11 54" src="https://user-images.githubusercontent.com/21684428/71585978-be4abd00-2b18-11ea-9a02-2779e5720f4d.png">

**Si la réponse est juste:** 
<img width="1440" alt="Screen Shot 2019-12-30 at 15 12 59" src="https://user-images.githubusercontent.com/21684428/71586016-e803e400-2b18-11ea-87c0-1306fc6e2821.png">
**Sinon si la réponse est fausse:**
<img width="1440" alt="Screen Shot 2019-12-30 at 15 13 52" src="https://user-images.githubusercontent.com/21684428/71586051-14b7fb80-2b19-11ea-8f8d-b1f0efa90edc.png">




