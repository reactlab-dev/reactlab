---
id: react-jsx-element
title: JSX & React Element
sidebar_label: JSX & React Element
---

## Le JSX est une expression JavaScript dont l'évaluation produit un React Element

Voici un simple exemple de code JSX:

```jsx
const element = <h1>Hello world</h1>;
```

Cette simple ligne de code est du code JavaScript utilisant la syntaxe JSX sur la partie droite de l'affectation.

**Le JSX produit un React Element. Ainsi le JSX d'un point de vue JavaScript est une expression comme n'importe quelle expression JavaScript *normale*.** On peut donc dire que l'évaluation d'une expression JSX renvoie un React Element. Pour mémoire, une expression en language informatique est une combinaison de constantes, variables, opérateurs et fonctions qui est interprétée et calculée pour produire une unique valeur (ici un React Element). Ce processus correspond à *l'évaluation* de l'expression. Nous verrons par la suite que les expressions JSX peuvent être aussi riches que celà et contenir des constantes, variables, etc.

## Un React Element peut contenir des properties

Un **React Element** peut contenir des **properties**. Pour rappel et comparaison, les **HTML Elements** ont pour leur part des **attributes**.

```jsx
const element = <h1 className='greeting'>Hello world</h1>;
```

## Un React Element est un simple objet JavaScript

Le code précédent après compilation du JSX en JavaScript correspond au code suivant:

Les deux exemples de code suivant sont équivalents:

```jsx
const element = <h1 className='greeting'>Hello world</h1>;
```

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello world'
);
```

React.createElement renvoit de simple object JavaScript ressemblant à ceci:

```js
// Remarque : cette structure est simplifiée
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello world'
  }
};
```

## Représentation d'un React Element

**un React element est un simple object JavaScript qui représente l'état de différents DOM elements à un instant t.**

Afin de mieux se représenter ce dont il s'agit, imaginez l'enregistrement video de ce que voit l'utilisateur en train d'utiliser une application React. Vous pouvez alors voir un React Element comme un morceau d'image de ce film.

## Le JSX peut contenir des expressions JavaScript

Le JSX peut faire référence à une variable:

```jsx
const who = 'Devoxx';
  
const element = <h1>Hello {who}</h1>;
```

Le JSX peut contenir n'importe quelle expression JavaScript valide

```jsx
const person = {
  firstName: 'Thierry',
  lastName: 'Abaléa'
};
  
const formatName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
const element = <h1>Hello {formatName(person)}</h1>;
```

## Multiline JSX
Le JSX peut s'écrire sur plusieurs lignes. Entourer le JSX de parenthèses n'est pas toujours nécessaire. Nous recommandons toutefois de le faire pour se prémunir de bug (cf [éviter les pièges](#eviter-les-pieges)) et par homogénéité avec les cas où les parenthèses sont nécessaires.

```jsx
const person = {
  firstName: 'Thierry',
  lastName: 'Abaléa'
};
  
const formatName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
const element = (
  <h1>
    Hello {formatName(person)}
  </h1>
);
```

## Spécifier des childrens (éléments enfants) en JSX

Les balises JSX peuvent contenir des enfants/childrens :

```jsx
const element = (
  <div>
    <h1>Hello Folks</h1>
    <h2>Ravi de vous voir à Devoxx !</h2>
  </div>
);
````

La balise JSX suivante n'a pas d'enfant et vous pouvez ainsi la fermer immédiatement avec */>*, comme en XML

```jsx
const element = <img src={user.avatarUrl} />;
```

## Eviter les pièges

### L'absense de parenthèse autour de code JSX

La nécessité de parenthèses dans certains cas est lié au comportement de JavaScript, nommé [Automatic Semicolon Insertion](https://stackoverflow.com/q/2846283). Le code suivant est buggé. Cependant, TypeScript remonte une erreur de compilation ayant identifié du code "mort" (le JSX dans ce cas).

```jsx
const person = {
  firstName: 'Thierry',
  lastName: 'Abaléa'
};
  
const formatName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
const Hello = () => {
  // bug: la ligne suivante est équivalente à 'return ;'
  return
    <h1>
      Hello {formatName(person)}
    </h1>
};
  
const element = <Hello />
```

### L'usage d'accolades au lieu de parenthèses

Une erreur courante en React est l'utilisation d'accolade en lieu est place de parenthèses. A l'exécution React remonte l'erreur suivante: "*Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.*".

```jsx
// code buggé
const Hello = () => {
  <h1>
    Hello {formatName(person)}
  </h1>
};
```

Cette erreur n'est pas le propre de React ou JSX. Noter que le code suivant qui ne contient pas de JavaScript est buggé:

```js
// code buggé
const formatName = ({ firstName, lastName }) => {
  `${firstName} ${lastName}`
};
```

Elle est cependant plus fréquente en React puisqu'il est courant d'écrire du code JSX sur plusieurs lignes. Il est plus rare d'écrire une seule instruction/expression JavaScript sur plusieurs lignes.
