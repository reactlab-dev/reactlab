---
id: instructions-step-7-detailed
title: Etape 7 (détaillée)
sidebar_label: Etape 7 (détaillée)
---

## [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-7/lab/front)

Cette 7ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [Render Props](../react/react-render-props)

## Afficher la liste d'experiences en utilisant le Props Rendering ([instructions sommaires](./step-7-summary.md))

- React concepts utiles:

  - Render Props

- Dans cette étape vous devrez appliquer le pattern de `Render props`, pour cela l'objectif sera de créer une nouvelle class qui prendra en `props` un `filter` et un `React.ComponentType`. Cette class permettra de récupérer et de transmètre une liste d'experiences au component qu'elle recoit en paramètre.

- Concrètement vous devez créer une class `ListDataProvider` qui dans un premier temps ne prends qu'un `filter` en props et a une liste d'experiences : `experiences` dans son `state`

```tsx
// ExperienceList.tsx

class ListDataProvider extends React.Component<
  {filter?: string},
  {experiences: Experience[]}
>
```

- Depuis `FilteredExperienceList` extrayez la récupération de la liste et mettez la dans `ListDataProvider`.

```tsx
// ExerienceList.tsx

class ListDataProvider extends React.Component<
  {filter?: string},
  {experiences: Experience[]}
> {
  constructor(props: ListDataProviderProps) {
    super(props);
    this.state = {
      experiences: [],
    };
  }

  async fetchExperiences() ...

  async componentDidMount() ...

  async componentDidUpdate(prevProps: ListDataProviderProps) ...

```

- `FilteredExperienceList` devient donc une classe qui n'affiche que la liste. Utilisez `FilteredExperienceList` dans `ListDataProvider` afin d'afficher la liste.

```tsx
// ExperienceList.tsx

class FilteredExperienceList extends React.Component<
  {experiences: Experience[]},
  {detailsShowedExperienceId?: string }
> ...

// ListDataProvider

/*
 * ...
 */
render() {
    return <FilteredExperienceList experiences={this.state.experiences}/>
/*
 * ...
 */

```

- Maintenant vous pouvez passer la class `FilteredExperienceList` en `props` à `ListDataProvider`,

```tsx
// ListDataProvider's props

interface ListDataProviderState {
  experiences: Experience[];
}
interface ListDataProviderProps {
  filter?: string;
  render: React.ComponentType<{ experiences: Experience[] }>;
}
class ListDataProvider extends React.Component<
  ListDataProviderProps,
  ListDataProviderState
> {
```

- Remplacez `<FilteredExperienceList/>` par `render` des `props`. Afin de pouvoir retourner la liste au travers de `this.props.render` vous devez retourner un `React.Element` servez vous de la méthode `React.createElement`.

```tsx
    render() {
        return React.createElement(this.props.render, {
        experiences: this.state.experiences,
        });
    }
```
