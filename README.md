README BACK + FRONT

Bienvenue dans W@rdrobe, l'application qui vous permet d'essayer toute une garderobe gratuitement. Tout d'abord, en arrivant sur le site il vous faudra vous authentifier ou créer un compte. Une fois authentifié vous serez redirigé vers la page d'accueil vous proposant plsuieurs choix. Vous pourrez accéder à la page de sélection sur laquelle vous pourrez choisir les vêtements à ajouter à votre garde-robe. Une fois plusieurs vêtements ajoutés, vous pourrez vous diriger vers la page TRY ON afin de faire défiler les vêtements et trouver le style qui fera retourner toutes les têtes. À quoi servent tes vêtements si tu ne sais pas les assembler ?



**************************** LANCER LE PROJET ****************************

BACK-END : 
            
- faire un *maven clean-install* sur le projet. 
- se mettre dans le dossier hsqldb-2.6.1 2/hsqldb et démarrer la base de données avec la commande *java -classpath lib/hsqldb.jar org.hsqldb.server.Server --database.0 file:hsqldb/demodb --dbname.0 database*. 
- démarrer le projet grâce à l'IDE. 
            
FRONT-END :

- faire un *npm i* afin d'installer les dépendances et créer le répertoire node-modules. 
- lancer le projet avec la commande *npm run-start*. 


Accéder ensuite au site web sur l'url http://localhost:3000



******************** SCHÉMA DU FONCTIONNEMENT GLOBAL DE L'APPLICATION ********************


![Alt text](doc/schema_interactions.png?raw=true "Title")


******************** SCHÉMA DE LA BASE DE DONNÉES ********************

![Alt text](doc/schema_bdd.png?raw=true "Title")


******************** RÉPARTITION DU TRAVAIL ********************

Liam s'est principalement occupé du dimensionnement du projet ainsi que toute la partie design du site. Il s'est également chargé de reprendre le code et le factoriser et réorganiser le projet.
Hugo quant à lui s'est principalement occupé de l'ajout des fonctionnalités de l'application et des communications entre le back-end et le front-end


******************** DIFFICULTÉS RENCONTRÉES ********************

Durant ce projet, nous avons rencontré une difficulté en particulier. Nous souhaitions au tout début effectuer notre projet en proposant à l'utilisateur d'uploader les photos qu'il aurait pris lui-même. Néanmoins, on a vite vu que cela était compliqué et qu'il fallait fonctionner avec des images récupérées depuis des urls. Ainsi, nous pouvons dégager un axe d'amélioration du projet qui permettrait à un utilisateur d'uploader son image que l'on stockerait sur un serveur web supplémentaire.
