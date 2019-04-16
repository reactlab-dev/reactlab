---
id: instructions-step-2-summary
title: Etape 2 (sommaire)
sidebar_label: Etape 2 (sommaire)
---

## Afficher la liste des expériences depuis un service REST ([instructions détaillées](./step-2-detailed.md))

Cette étape consiste à afficher la liste des expériences depuis un service REST.

- React concepts utiles:

  - Class Component

  - State

  - Lifecycle

- Le service REST renvoyant la liste des expériences est géré par un projet Node se trouvant dans le dossier `./back`. Pour le rendre disponible, exécuter `yarn start` depuis ce dossier. Le endpoint en question est accessible depuis [https://z251j2o0xm.sse.codesandbox.io/list/experience](https://z251j2o0xm.sse.codesandbox.io/list/experience).

- Charger les expériences depuis le endpoint REST. Vous pouvez vous appuyer sur la fonction suivante:

  ```typescript
  async function fetchExperiences(filter?: string): Promise<Experience[]> {
    const result = await fetch(
      //`http://localhost:3001/list/experience/${filter || ''}`,
      `https://z251j2o0xm.sse.codesandbox.io/list/experience/${filter || ''}`,
    );
    const { response } = await result.json();
    return response;
  }
  ```
