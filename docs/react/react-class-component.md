---
id: react-class-component
title: Class Component
sidebar_label: Class Component
---

En plus des [Function Components](react-function-component), il est possible de créer des composants à partir de classe JavaScript, que nous nommons Class Component.

## Définition d'un Class Component

Un Class Component doit **toujours hériter de la classe React.Component et implémenter au minimum une méthode nommée render** ne prenant pas d'argument et renvoyant un React.element.

## Exemple de Class Component

Voici un exemple simple de Class Component:

```jsx
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

Le Class Component *HelloWorld* est équivalent au Function Component suivant:

```jsx
const HelloWorld = () => <h1>Hello world</h1>;
```

Le Class Component et le Function Component précédents peuvent être utilisés/référencés de la même manière:

```jsx
const App = <HelloWorld />;

ReactDOM.render(
  App,
  document.getElementById('root')
);
```

## Un Class Component reçoit ses Props/Properties par son constructeur

Comme le Function Component, le Class Component peut disposer de Props/Properties. Il reçoit l'object correspondant au niveau de son constructeur.

```tsx
interface HelloWorldProps {
  who: string;
}
  
class HelloWorld extends React.Component<HelloWorldProps> {
  render() {
    return <h1>Hello {this.props.who}</h1>;
  }
}
```

Le Class Component *HelloWorld* est équivalent au Function Component suivant:

```tsx
const HelloWorld = ({ who }: HelloWorldProps) => <h1>Hello {who}</h1>;
```

Encore une fois, Class Component et Function Component s'utilisent de la même manière:

```jsx
const element = <HelloWorld who='Devoxx' />;
```

## L'intérêt des Class Components

A ce stade, on peut se demander l'intérêt de recourir à un Class Component s'il est toujours possible d'écrire un Functional Component identique, ayant pour ce dernier l'avantage de la concision.

L'intérêt réside dans la capacité des Class Components de disposer d'un état et d'un cycle de vie offrant des possibilités unique par rapport aux Functions Components. Les concepts de State & Lifecycle sont abordés dans [une page qui leur sont réservés](react-state-and-lifecycle). 

Depuis la version 16.8 de React sortie en février 2019, ce n'est plus vrai: les Functions Components peuvent disposer de ses mêmes possibilités en utilisant la nouvelle fonctionnalité, nommée Hooks. Cependant, les Class Components sont là depuis le début de React et ne sont pas amenés à disparaitre tout de suite. Il est important de les maîtriser. La fonctionnalité Hooks est sans aucun doute une évolution majeure de React mais il est encore trop tôt pour savoir de quel nature sera son adoption par les utilisateurs React.
