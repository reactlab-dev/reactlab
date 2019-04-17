---
id: instructions-step-6-detailed
title: Etape 6 (détaillée)
sidebar_label: Etape 6 (détaillée)
---

## [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-6/lab/front)

Cette 6ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [componentDidUpdate](../react/react-componentdidupdate)

## ([instructions sommaires](./step-6-summary.md))

- React concepts utiles:

  - ComponentDidUpdate

- Dans cette étape vous allez devoir extraire le fetch de la liste et sont affichage de `ExperienceList` dans une nouvelle class `FilteredExperienceList`.

- `FilteredExperienceList` recevra donc en `props` le filtre saisie dans `ExperienceList` recupèrera la liste et l'affichera.

  - Commencez par créer la class `FilteredExperienceList` en utilisant le même `State` que la class `ExperienceList`.

  ```tsx
  // ExperienceList.tsx

  interface State {
    experiences: Experience[];
    detailsShowedExperienceId?: string;
  }

  class FilteredExperienceList extends React.Component<
    { filter?: string },
    State
  >
  ```

  - Ensuite vous devrez extraire les différentes méthodes nécessaire à la récupération de la liste

  ```tsx
  // ExperienceList.tsx
  /*
  * ...
  */
  async componentDidMount()
  /*
  * ...
  */
  async filterList(filter?: string)
  /*
  * ...
  */
  ```

  - Maintenant dans `componentDidMount` vous pouvez déclencher l'appel de la liste filtré

  ```tsx
  // ExperienceList.tsx
  // FilteredExperienceList class

  async componentDidMount() {
    const experiences = await fetchExperiences();
    this.setState({
      experiences,
    });
  }
  ```

  - Il reste à afficher la liste des experiences du state.

  ```tsx
  // ExperienceList.tsx
  // FilteredExperienceList class

  render() {
    return (
      <div className={styles['list-container']}>
      /*
      *...
      */
  ```

- `ExperienceList` quand a lui devra stocker le `filter` afin de le transmètre à `FilteredExperienceList`.

  - Changez la déclaration de `ExperienceList` afin de rescpecter le contrat

  ```tsx
  // ExperienceList.tsx

  class ExperienceList extends React.Component<{}, { filter?: string }>
  ```

  - La class `ExperienceList` ne contient normalement plus qu'un `constructor` et une fonction `render`. Modifez le `onChange` de l'input affin qu'il mette à jour le `state`

  ```tsx
  // ExperienceList.tsx
  // ExperienceList class

  <input
    className={styles['input']}
    onChange={async ({ target: { value } }) => {
      this.setState({ filter: value });
    }}
  />
  ```

  - Vous pouvez maintenant, dans le render de `ExperienceList`, remplacer la liste par le component `FilteredExperienceList`

  ```tsx
  // ExperienceList.tsx
  // ExperienceList class

  <FilteredExperienceList filter={this.state.filter} />
  ```

* Attention il faut que `FilteredExperienceList` gère le fait qu'à chaque changement de la props `filter` qu'il recoit, celle-ci déclenche la récupération de la liste filtrée.

* Attention un utiliser `setState` dans un `componentDidUpdate` entraine l'`update du component`

```tsx
  componentDidUpdate(prevProps: { filter?: string }){
     if (prevProps !== this.props) {
      this.filterList(this.props.filter);
    }
  }
```
