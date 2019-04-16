---
id: instructions-step-1-detailed
title: Etape 1 (détaillée)
sidebar_label: Etape 1 (détaillée)
---

Cette 1ère étape nécessite d'avoir pris connaissance des pages du cours React suivantes:

- [A propos de ce cours](../react/react-intro)
- [Hello World](../react/react-hello-world)
- [JSX & React Element](../react/react-jsx-element)
- [Function Component](../react/react-function-component)
- [List & keys](../react/react-list-and-keys)

## Afficher la liste des expériences depuis un fichier JSON ([instructions sommaires](./step-1-summary.md))

Cette étape consiste à afficher la liste des expériences depuis un fichier JSON.

- React concepts utiles:

  - Function Component

  - Lists and Keys

  - Props

- Implémenter le composant `ExperienceList` dans [./front/src/experience/ExperienceList.tsx](./front/src/experience/ExperienceList.tsx). Appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.html](./front/html-css-integration/ExperienceList.html) et sur le fichier CSS [./front/src/experience/ExperienceList.module.css](./front/src/experience/ExperienceList.module.css).

```js
// ExperienceList.tsx
function ExperienceList() {
  return (
     <div className={styles['list-main-container']}>
      <div className={styles['list-container']}>
        <!-- THE LIST GO HERE  -->
      </div>
    </div>
  );
}
```

- La liste des expériences venant du fichier [./front/src/data/experiences.json](./front/src/data/experiences.json) peut être chargée avec le code suivant :

  ```typescript
  // ExperienceList.tsx
  import React from 'react';
  import styles from './ExperienceList.module.css';
  import { Experience } from '../model';
  const experiences: Experience[] = require('../data/experiences.json');
  ```

- Vous pouvez donc acceder à la constante `experiences` à tout moment, exemple :

  ```jsx
  // ExperienceList.tsx
  function ExperienceList() {
  return (
      <div className={styles['list-main-container']}>
      <div className={styles['list-container']}>
          <!-- THE LIST GO HERE  -->
          {experience.length}
      </div>
      </div>
  );
  }
  ```

- Pour afficher une expérience vous pouvez vous servire de ce html dans votre boucle sur la liste:

  ```html
  <div className={styles['experience-card']} key={id}>
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['expertise']}>{expertise}</p>
    <p className={styles['organisation-label']}>Team organisation</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['more-about']}>More about</p>
  </div>
  ```

Refactorer le code en extrayant le code lié à une expérience dans un composant ExperienceCard. A titre d'exercice, utilisez une arrow function plutôt que le mot clé `function`. Faites l'exerice également d'utiliser la `nested destructuration` sur le paramètre du composant afin de pouvoir utiliser directement les noms des propriétés de l'objet Experience.

```ts
const ExperienceCard = () => (
    /* returned content : experience card */
)
```
