---
id: react-state-and-lifecycle
title: State & Lifecycle
sidebar_label: State & Lifecycle
---

## State

Un Class Component peut disposer d'un état qui lui est propre qui peut changer dans le temps contrairement au Function Component ([sans usage des Hooks](react-class-component#l-interet-des-class-components)).

Prenons l'exemple d'un composant Clock qui a pour but d'afficher l'heure courante. Dans cet exemple, l'heure affiché n'évolue pas au fil du temps. Nous souhaitons ici l'heure au moment de l'affichage du composant.

Il est possible de conserver l'heure dans le State du composant et de le récupérer comme l'illustre le code suivant:

```jsx
interface ClockState {
  date: Date;
}

class Clock extends React.Component<{}, ClockState> {
  constructor(props: {}) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Vous devez toujours initialiser le State avec un objet éventuellement vide (si on souhaite que les propriétés du state reste undefined). Si vous ne le faite pas vous aurez une erreur (TypeError: null or undefined has no properties) lors de l'accès à une property depuis la méthode render par exemple.

Vous avez donc toujours implémenter le constructeur lorsque votre component à un état.

Vous noterez l'appel au constructeur de base avec en argument l'objet properties. Si votre Class Component comporte un constructeur, vous devez toujours ajouter l'instruction *super(props)* en première ligne de ce dernier. C'est ainsi toujours à faire si votre Class Component est Stateful (comporte un état).

## Lifecycle & mise à jour du state

### Libération de ressources

Un Class Component offre via son lifecycle la possibilité de libérer des ressources.

Prenons pour exemple, une horloge qui s'afficherait à l'utilisateur.

Nous devons mettre en place un minuteur avec la fonction setInterval quand l'horloge apparaît dans le DOM pour la première fois. Nous allons devoir le faire après la phase nommée en React montage/mounting associée au composant Horloge. Nous aurons alors besoin d'implémenter la méthode de prototype componentDidMount.

Pour nettoyer le minuteur et éviter des fuites mémoires, il convient d'appeler la fonction clearInterval avant le démontage/unmounting du composant. Pour celà, nous devons implémenter la méthode de prototype componentWillUnmount.

Le code suivant correspond à l'implémentation de notre composant Horloge:

```tsx
interface ClockState {
  date: Date;
}
  
class Clock extends React.Component<{}, ClockState> {
  private timerId: number;
  
  constructor(props: {}) {
    super(props);
    this.state = { date: new Date() };
  }
  
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div>
        <h1>Hello Devoxx</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

### Appel à une API REST

Vous ne devez jamais faire d'appel asynchrone depuis la méthode render.

Si vous devez faire un appel à API de type REST par exemple, il convient de le faire avec la méthode de prototype componentDidMount

```jsx
async componentDidMount() {
    const experiences = await fetch(url);
    this.setState({ experiences });
}
```

## Utiliser le State correctement

### Ne modifiez pas l’état directement

Dans les exemples précédents, vous noterez l'appel de la méthode de prototype setState pour modifier le state. Vous ne devez jamais modifier directement le state (ne pas faire: this.state.date = ...) en dehors du constructeur. A ma connaissance, au moins deux raisons expliquent celà:
* React doit être averti des changements du state.
* L'un des principes de React est que le state ne doit jamais changer durant toute l'éxecution de la méthode render.

### Les mises à jour du State peuvent être asynchrones

React peut grouper plusieurs appels à setState() en une seule mise à jour pour des raisons de performance.

Comme this.props et this.state peuvent être mises à jour de façon asynchrone, vous ne devez pas vous baser sur leurs valeurs pour calculer le prochain état.

Par exemple, ce code peut échouer pour mettre à jour un compteur :
```jsx
// Erroné
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

Vous devez utiliser une fonction qui prends en paramètre le state et les props:

```jsx
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### Les mises à jour du State sont fusionnés/mergés

Si le state d'un composant comporte deux propriétés, vous pouvez passer au setState un objet ne contenant que l'une des deux propriétés à mettre à jour, sans risque de perdre la valeur associée à l'autre propriété.

En effet, les mises à jour du State sont fusionnés/mergés
