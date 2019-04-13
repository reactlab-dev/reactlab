## Presentation

Arborescence

```bash
|-- back
└-- front
    |-- html-css-integration // [read-only] exemple de html pour integrer les étapes
    |-- public  // [read-only] les assets public y compris index.html
    └-- src
        |-- data
        |   └- experience.json   // [read-only] data nécessaire à la première étape
        |-- experience
        |   |-- create
        |   |   |-- Informations.module.css  // [read-only] css lié à Information
        |   |   |-- Team.module.css          // [read-only] css lié à Team
        |   |   |-- Informations.tsx         // [read-only]
        |   |   |-- Team.tsx                 // Affiche le formulaire de création de team (Etape 5)
        |   |   └-- Wizard.tsx               // [read-only]
        |   |-- ExperienceDetails.module.css // [read-only] css lié à ExperienceDetails
        |   |-- ExperienceDetails.tsx        // [read-only] details de Experience
        |   |-- ExperienceList.tsx           // Liste de Experience
        |   └-- ExperienceList.module.css    // [read-only] css lié à ExperienceList
        |-- model
        |   └ experience.ts                  // [read-only] interfaces à importé
        |-- App.module.css
        |-- App.ts                           // [read-only] Premier component de react
        |-- index.tsx                        // [read-only] point de départ de react
        └-- styles.ts


```

## Etape 1 : Afficher la liste des expériences depuis un fichier JSON

Cette étape consiste à afficher la liste des expériences depuis un fichier JSON.

- React concepts utiles:

  - Function Component

  - Lists and Keys

  - Props

- Implémenter le composant `ExperienceList` dans [./front/src/experience/ExperienceList.tsx](./front/src/experience/ExperienceList.tsx). Appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.html](./front/html-css-integration/ExperienceList.html) et sur le fichier CSS [./front/src/experience/ExperienceList.module.css](./front/src/experience/ExperienceList.module.css).
-
- La liste des expériences venant du fichier [./front/src/data/experiences.json](./front/src/data/experiences.json) peut être chargée avec le code suivant :

  ```typescript
  const experiences: Experience[] = require('../data/experiences.json');
  ```

- Refactorer le code en extrayant le code lié à une expérience dans un composant ExperienceCard. A titre d'exercice, utilisez une arrow function plutôt que le mot clé `function`. Faites l'exerice également d'utiliser la `nested destructuration`(cf slide #??) sur le paramètre du composant afin de pouvoir utiliser directement les noms des propriétés de l'objet Experience.

## Etape 2 : Afficher la liste des expériences depuis un service REST

Cette étape consiste à afficher la liste des expériences depuis un service REST.

- React concepts utiles:

  - Class Component

  - State

  - Lifecycle

- Le service REST renvoyant la liste des expériences est géré par un projet Node se trouvant dans le dossier `./back`. Pour le rendre disponible, exécuter `yarn start` depuis ce dossier. Le endpoint en question est accessible depuis [http://localhost:3001/list/experience](http://localhost:3001/list/experience).

- Charger les expériences depuis le endpoint REST. Vous pouvez vous appuyer sur la fonction suivante:

  ```typescript
  async function fetchExperiences(filter?: string): Promise<Experience[]> {
    const result = await fetch(
      `http://localhost:3001/list/experience/${filter || ''}`,
    );
    const { response } = await result.json();
    return response;
  }
  ```

## Etape 3 : Proposer une search box pour rechercher dans la liste d'expérience

- React concepts utiles:

  - Handling Events (input.onChange)

- Ajouter un React input component en guise de Search Box. Pour le positionner et le styliser comme attendu, appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.searchBox.html](./front/html-css-integration/ExperienceList.searchBox.html).

- La recherche doit être assurée par le même endpoint REST qu'à l'étape 1. Pour cela, la fonction `fetchExperiences` prend en paramètre un filtre de type texte. Afficher le résultat renvoyée par le service.

## Etape 4 : Afficher le détail d'une expérience

Nous souhaitons offir la possibilité à l'utilisateur d'avoir le détail d'une expérience en cliquant sur cette celle-ci. Un second clique sur l'expérience permet de revenir au summary (informations affichés dans les précédentes étapes). Une seul expérience peut avoir son détail affiché à un moment donné.

- React concepts utiles:

  - Handling Events (div.onClick)
  - Conditional Rendering
  - Lifting State Up

- Refactorer le composant `ExperienceCard` en extrayant les `children` de la `<div className={styles['experience-card']}>`dans un component nommé `ExperienceSummary`. Un composant ne pouvant renvoyer qu'un `React.Element`, wrappez les `children` dans une `<div></div>` ou dans `<></>` le deuxieme choix ne crée aucun element html : [voir ici](https://reactjs.org/docs/fragments.html#short-syntax)

* Pour afficher les détails vous devez vous servir du component `ExperienceDetails` se trouvant dans [./front/src/experience/ExperienceDetails.tsx](./front/src/experience/ExperienceDetails.tsx). Ce dernier prend en `props` une experience de type `Experience`

- Lors d'un clic sur une `ExperienceCard` vous devez :
  - Affichez le composant `ExperienceDetails` à la place du composant `ExperienceSummary`. Afin de faire cela utilisez le concept de `Conditional Rendering`.
  - Un second clic sur `ExperienceCard` permet de ré-afficher le summary (`ExperienceSummary`)
  - Pour mémoire, une seule expérience peut avoir son détail afficher à un instant t. Par exemple, je clique pour ouvrir le détail de l'expérience 'crème de la crème', ce dernier s'ouvre, je clique sur l'expérience BNP alors le detail de l'expérience 'crème de la crème' se ferme et celui de BNP s'ouvre.

## Etape 5 : Permettre l'ajout de personnes dans le formulaire de création d'experience

- React concepts utiles:

  - Hook (useState)

Depuis [la page Informations](http://localhost:3001/experience/create/informations) lorsque vous cliquez sur `Suivant` vous êtes redirigé sur la route [http://localhost:3000/experience/create/team](http://localhost:3001/experience/create/team) qui affiche le component `Team` de [./front/src/experience/create/Informations.tsx](./front/src/experience/create/Informations.tsx)

Vous allez devoir créer un formulaire pour renseigner le nom et le role d'un membre et en suite afficher la liste des membres : [HTML final](./front/html-css-integration/Team.html)

#### tâches:

- créer un **Function** Component nommé AddPeople permettant l'ajout d'une personne (cf [HTML final](./front/html-css-integration/Team.html) pour voir la structure HTML). Appuyez vous sur la fonctionnalité Hooks (useState) pour gérer l'état de ce composant. Ce component a en props une fonction `onAdd` qui retourne la personne crée de type [People](./front/src/model/experience.ts). Assurez vous de désactiver le bouton si tous les champs ne sont pas saisies. Au clic sur le bouton 'add', vider les champs.

- implémenter La liste :
  - Afficher la liste des membres ajoutés à l'équipe
  - Un membre doit pouvoir être supprimé en un clic
