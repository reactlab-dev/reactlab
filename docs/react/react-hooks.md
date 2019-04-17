---
id: react-hooks
title: Hooks
sidebar_label: Hooks
---

Les Hooks correspondent à une fonctionnalité récente introduite dans la version 16.8 en mars 2019.

## Objectifs des Hooks

Les Hooks permettent de bénéficier d'un State et d'autres fonctionnalités de React sans avoir à écrire une classe.

Les Hooks n'ont pas pour but premier de remplacer les classes mais plutôt de permettre de simplifier le code existant. Ils permettent également une réutilisation du code facilitée.

Par exemple, il arrive que dans les méthodes duelles que sont componentDidMount et componentWillMount, on retrouve du code associé à 2 problèmatiques bien différentes. Le code de ses problèmatiques sont splittés entre les 2 méthodes. Les Hooks offrent une solution afin de colocaliser le code qui traite d'une même problèmatique. On aurait ainsi 2 hooks, un par problèmatique.

L'objectif de ce cours n'est pas d'introduire dans le détail les Hooks. Il s'agit plutôt d'une brève introduction du sujet avec l'un des hook build-in dans React, le hook *useState*.

## Le hook useState

Les Hooks en général et le hook useState en particulier permet d'ajouter à un Function Component une fonctionnalité qui était alors réservé au Class Component: la possibilité de disposer d'un state locale à la fonction.

Le code suivant correspond à un compteur qui a chaque clic de bouton permet d'incrémenter une valeur.

Le premier argument de useState est l'état initial de notre compteur, à savoir 0.

useState renvoie une paire composée en premier de la valeur courante de l'état et en second d'une fonction permettant de modifier le state.

```jsx
import React, { useState } from 'react';

function Counter() {
  // Déclaration d'une nouvelle variable du state, nommé ici count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}
```