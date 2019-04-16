---
id: react-function-component
title: Function Component
sidebar_label: Function Component
---

Il existe deux types de React components:
* **Function Component**
* **[Class Component](react-class-component)**

Commençons par aborder les Function Components.

## Définition

Un Function Component est une fonction, avec un seul argument **optionnel** nommé *props* ou *properties* et correspondant à un simple Javascript object, qui renvoit un React Element.

Pour rappel, un React element est un simple object JavaScript qui représente l'état de différents DOM elements à un instant t (cf [représentation d'un React Element](react-jsx-element#representation-d-un-react-element)).

## Exemple de Function Component

Mettons de côté pour le moment la notion de *properties* et concentrons nous sur les fonctions sans argument renvoyant un React Element.

```jsx
const person = {
  firstName: 'Eliott',
  lastName: 'Balette'
};
  
const formatName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
// Greeting is a function component
const Greeting = () => (
  <h1>
    Hello {formatName(person)}
  </h1>
);
  
// element is a React element
const element = <Greeting/>;
```

Le code précédent après compilation du JSX en JavaScript correspond au code suivant:

```js
const person = {
  firstName: 'Eliott',
  lastName: 'Balette'
};
  
const formatName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
  
// Greeting is a function component
const Greeting = () =>
  React.createElement(
    "h1",
    null,
    "Hello ",
    formatName(person))
;
  
// element is a React element
const element = React.createElement(Greeting, null);
```

## Un Function Component peut prendre un paramètre Props/Properties

Le Function Component *HelloWorld* suivant prends en paramètre un simple objet JavaScript, représentant ses props/properties. 

L'exemple suivant illustre le typage d'un Function Component en TypeScript.

```tsx
interface HelloWorldProps {
  name: string;
}
  
const HelloWorld = (props: HelloWorldProps) => (
  <div>
    Hello {props.name}
  </div>
);
  
const element = <HelloWorld name='World' />;
```

Attention : vous ne devez pas passer plus d'un paramètre à un Function Component. Seul le premier paramètre sera considéré. Les autres seront ignorés.

## Les props sont en lecture seule

Un composant ne doit jamais modifier ses propres properties.

Ainsi, ne faites jamais celà:

```tsx
interface Person {
  firstName: string;
  lastName: string;
}
  
interface HelloWorldProps {
  person?: Person;
}
  
const HelloWorld = (props: HelloWorldProps) => {
  props.person.lastName = '***'; // never do this !!!
  return <div>Hello {props.person.firstName} {props.person.lastName}</div>;
};
```
