---
id: instructions-step-1-summary
title: Etape 1 (sommaire)
sidebar_label: Etape 1 (sommaire)
---

## [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-1/lab/front)

Cette 1ère étape nécessite d'avoir pris connaissance des pages du cours React suivantes:

- [A propos de ce cours](../react/react-intro)
- [Hello World](../react/react-hello-world)
- [JSX & React Element](../react/react-jsx-element)
- [Function Component](../react/react-function-component)
- [List & keys](../react/react-list-and-keys)

## Afficher la liste des expériences depuis un fichier JSON ([instructions détaillées](./step-1-detailed.md))

Cette étape consiste à afficher la liste des expériences depuis un fichier JSON.

- React concepts utiles:

  - Function Component

  - Lists and Keys

  - Props

- Implémenter le composant `ExperienceList` dans `./front/src/experience/ExperienceList.tsx`. Appuyez vous sur le fichier HTML `./front/html-css-integration/ExperienceList.html` et sur le fichier CSS `./front/src/experience/ExperienceList.module.css`.

- La liste des expériences venant du fichier `./front/src/data/experiences.json` peut être chargée avec le code suivant :

  ```typescript
  const experiences: Experience[] = require('../data/experiences.json');
  ```

- Refactorer le code en extrayant le code lié à une expérience dans un composant ExperienceCard. A titre d'exercice, utilisez une arrow function plutôt que le mot clé `function`. Faites l'exerice également d'utiliser la `nested destructuration`(cf slide #??) sur le paramètre du composant afin de pouvoir utiliser directement les noms des propriétés de l'objet Experience.
