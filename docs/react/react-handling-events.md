---
id: react-handling-events
title: Handling Events
sidebar_label: Handling Events
---

## Event Handler sur un composant

Un composant réagissant à un évènement, par exemple le clic d'un bouton, recoît en propriété son Event Handler sous la forme d'une fonction JavaScript. Exemple:

```tsx
const ValidateButton = (onValidate: () => void) => (
  <button onClick={onValidate}>
    Valider
  </button>
);

const element = <ValidateButton onValidate={() => console.log('validé')} />
```

## Event Handler & Function Binding

En JavaScrip de manière générale, il est nécessaire de correctement binder les fonctions correspondant à un Event Handler.

Il existe 3 manières de binder un Event Handler associé à une méthode de classe.

### Binding au niveau du constructeur

Vous pouvez binder l'Event Handler dans le constructeur comme ceci:

```tsx
class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
  constructor(props: HelloWorldProps) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <h1 onClick={this.incrementCount}>
        Hello {this.props.who} (clicks: {this.state.count})
      </h1>
    );
  }
}
```

### Arrow Function au niveau de l'initialisation de la propriété

Vous pouvez utiliser une *Arrow Function* au niveau de l'initialisation de la propriété correspondant à l'Event Handler.

Cette approache assez simple peut engendré des problèmes de performance. En effet, à chaque *rerendering du composant englobant* une nouvelle fonction est créée. La propriété correspondant à cette dernière ayant changée, React décide également de *rerenderé le composant emglobé* alors que ce n'est pas forcément nécessaire. La nouvelle fonction est en effet identique à la précédente.

```tsx
class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
  constructor(props: HelloWorldProps) {
    super(props);
    this.state = { count: 0 };
  }
  
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  
  render() {
    return (
      <h1 onClick={() => this.incrementCount()}>
        Hello {this.props.who} (clicks: {this.state.count})
      </h1>
    );
  }
}
```

### Utiliser les Class Fields (ES2019/Type)

En TypeScript et potentiellement en ES2019 (candidate status), il est possible d'utiliser les Class Fields. En effet, ces derniers bind automatiquement le contexte emglobant comme c'est le cas pour les Arrow Function.

```tsx
class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
  constructor(props: HelloWorldProps) {
    super(props);
    this.state = { count: 0 };
  }
  
  incrementCount = () => this.setState({ count: this.state.count + 1 };
  
  render() {
    return (
      <h1 onClick={this.incrementCount}>
        Hello {this.props.who} (clicks: {this.state.count})
      </h1>
    );
  }
}
```

## Input & onChange

L'exemple suivant illustre comment récupérer la valeur associée au onChange du component *input*. Il précise également comment typer en TypeScript l'Event Handler.

```tsx
import React, { ChangeEvent } from 'react';
  
interface HelloWorldState {
  who: string;
}
  
class HelloWorld extends React.Component<{}, HelloWorldState> {
  constructor(props: {}) {
    super(props);
    this.state = { who: 'Devoxx' };
  }
  
  onWhoChange = ({ target: { value: who } }: ChangeEvent<HTMLInputElement>) =>
    this.setState({ who });
  
  render() {
    return (
      <div>
        <input onChange={this.onWhoChange} />
        <h1>Hello {this.state.who}</h1>
      </div>
    );
  }
}
```