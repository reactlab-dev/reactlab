---
id: instructions-step-2-detailed
title: Etape 2 (détaillée)
sidebar_label: Etape 2 (détaillée)
---

## Afficher la liste des expériences depuis un service REST ([instructions sommaires](./step-2-summary.md))

Cette étape consiste à afficher la liste des expériences depuis un service REST.

- React concepts utiles:

  - Class Component

  - State

  - Lifecycle

- Le service REST renvoyant la liste des expériences est géré par un projet Node se trouvant dans le dossier `./back`. Pour le rendre disponible, exécuter `yarn start` depuis ce dossier. Le endpoint en question est accessible depuis [https://z251j2o0xm.sse.codesandbox.io/list/experience](https://z251j2o0xm.sse.codesandbox.io/list/experience).

- Changez d'abord le composant `ExperienceList` en class :

  ```ts
  // in ExperienceList.tsx (function)

  function ExperienceList() {
    return; // ExperienceList's content
  }
  ```

  ```ts
  // in ExperienceList.tsx (class)

  class ExperienceList extends React.Component<{}, {}> {
    constructor(props: {}) {
      super(props);
    }
    render() {
      return; // ExperienceList's content
    }
  }
  ```

- Charger les expériences depuis le endpoint REST. Vous pouvez vous appuyer sur la fonction suivante:

  ```typescript
  async function fetchExperiences(filter?: string): Promise<Experience[]> {
    const result = await fetch(
      // `http://localhost:3001/list/experience/${filter || ''}`,
      `https://z251j2o0xm.sse.codesandbox.io/list/experience/${filter || ''}`,
    );
    const { response } = await result.json();
    return response;
  }
  ```

- Collez cette fonction dans `ExperienceList.tsx` au meme niveau que `ExperienceList` :

```ts
// ExperienceList.tsx
// <{ props type }, { state type }>
class ExperienceList extends React.Component<{}, {}> {
  /*
   * ...
   * ...
   */
}

async function fetchExperiences(filter?: string): Promise<Experience[]> {
  const result = await fetch(
    // `http://localhost:3001/list/experience/${filter || ''}`,
    `https://z251j2o0xm.sse.codesandbox.io/list/experience/${filter || ''}`,
  );
  const { response } = await result.json();
  return response;
}
```

- La fonction étant asynchrone, vous devrez stocker son retour dans le `State` de votre classe, utilisez donc la methode `setState`:

```ts
// state type : { experiences: Experience[]}
// Exemple
const list = [
  {
    /* experience 1 */
  },
  {
    /* experience 2 */
  },
];
this.setState({ experiences: list });
```

- `setState` ne peut-être utilisé seulement une fois le composant monté, servez vous du lifeCycle hook présent dans les React.Component : `componentDidMount`

```ts
class ExperienceList extends React.Component<{}, {}> {
  /*
   * constructor ...
   * render ...
   */
  componentDidMount() {
    /* Use this.setState here */
  }
}
```
