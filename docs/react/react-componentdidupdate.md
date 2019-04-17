---
id: react-componentdidupdate
title: Lifecycle - componentDidUpdate
sidebar_label: Lifecycle - componentDidUpdate
---

## componentDidUpdate

Un Class Composant comporte entre autre la méthode suivante:

```
componentDidUpdate(prevProps, prevState, snapshot)
```

### Travailler avec le DOM

Cette méthode offre la possibilité de travailler sur le DOM une fois que le composant a été mis à jour.

### Appels réseaux

Si une méthode du lifecycle, la méthode componentDidMount, utilisée une property, vous constaterez que cette méthode n'est pas rappelée si la property change. En effet, componentDidMount est appelée une seule fois, après que le composant soit montée. Il se peut par exemple que votre componentDidMount fasse un appel à une REST API en prenant pour query param une property. Vous vous attendez probablement qu'un nouvelle appel à l'API se fasse si la property change. Mais ce n'est pas le cas.

Vous pouvez alors faire le même traitement au niveau de la méthode componentDidUpdate que celui de componentDidMount. A une exception près, la méthode componentDidUpdate est appelée à chaque rendering. Cependant, à chaque rendering, votre propriété ne change pas. Il faut donc éviter de déclencher un nouvelle appel réseau qui va potentiellement changer le state. Le retour de l'API peut être inchangé mais la référence de l'objet JavaScript est différent déclenchant un nouveau rendering. En conséquence, vous vous retrouvez avec une boucle infinie.

Il faut donc bien prendre garde à vérifier que la propriété est différente avant de déclencher l'appel réseau.

```tsx
interface UserProps {
    userID: string;
}
class User extends React.Component<UserProps> {
  // ...

  componentDidMount() {
    this.fetchData(this.props.userID);
  }

  componentDidUpdate(prevProps: UserProps) {
    // Utilisation classique (pensez bien à comparer les props) :
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
}
```
