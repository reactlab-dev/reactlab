---
id: react-fragments
title: Fragments
sidebar_label: Fragments
---

Le concept de *Fragments* est répertorié comme un concept avancé dans la documentation officielle de React. Cependant, notre expérience a montré qu'il était utile assez rapidement. Nous avons fait le choix de le classer dans les fondamentaux pour ce cours.

## La problèmatique

En React, un composant ne peut pas renvoyer une liste d'éléments React de la manière suivante:

```jsx
render() {
  return (
    <ChildA />
    <ChildB />
    <ChildC />
  );
}
````

En effet, pour mémoire le code JSX suivant <Component /> correspond à une expression. Celà n'a donc pas de sens de faire un return suivi directement par un enchaînement d'expressions.

Il est possible d'englober tous les éléments par une div par exemple. Mais celà introduit une div qui n'est pas forcément nécessaire voir problématique dans le cas d'une table HTML.

Prenons l'exemple suivant, la présence de la div englobant les td n'est pas possible:

```tsx
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

L'utilisation d'un tableau est possible:

```jsx
render() {
  return [
    <ChildA />,
    <ChildB />,
    <ChildC />,
  ];
}
```

Cependant, la présence de virgule pour séparer les différents éléments n'est pas commode surtout quand le code JSX est assez conséquent.

Les Fragments viennent donc répondre aux besoins de grouper une liste d'éléments en évitant d'introduire un noeud/node inutile dans le DOM.

## React.Fragment

On peut ainsi écrire pour regrouper nos td:

```jsx
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

## Syntaxe courte <></>

Une solution alternative au React.Fragment est d'utiliser la syntaxe courte <></>

```jsx
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```