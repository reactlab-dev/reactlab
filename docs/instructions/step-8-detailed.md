---
id: instructions-step-8-detailed
title: Etape 8 (détaillée)
sidebar_label: Etape 8 (détaillée)
---

Cette 8ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [High-Order Component](../react/react-hoc)

- [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-8/lab/front)

## Encapsulez la liste des experiences dans un HOC ([instructions sommaires](./step-8-summary.md))

- React concepts utiles:

  - HOC

- un Hight Order Component (HOC) est une fonction qui prend en paramètre un `React.ComponentType<any>` et qui retourne un `React.ComponentClass<any>`. Vous allez devoir transformer `ListDataProvider` en une fonction `connectDataProvider`

- Commencez par ecapsuler `ListDataProvider` dans une fonction `connectDataProvider` qui le retourne.

```tsx
// ExperienceList.tsx

function connectDataProvider() {
  return class ListDataProvider extends React.Component<
    ListDataProviderProps,
    ListDataProviderState
  >

```

- Remplacez `<ListDataProvider ... >` par le retour de `connectDataProvider()`. Votre liste doit toujours s'afficher.

```tsx
// ExperienceList.tsx

const ConnectedList = connectDataProvider();

// ExperienceList's render

<ConnectedList render={FilteredExperienceList} filter={this.state.filter} />;
```

- Dans notre cas `connectDataProvider` prend un argument : `Component: React.ComponentType<{ experiences: Experience[] }>` et retourne un `React.ComponentClass<{ filter?: string }>`. De manière à se que la class `ListDataProvider` ne reçoive plus `render` et se serve de `Component` pour afficher la liste.

```tsx
// ExperienceList.tsx
const ConnectedList = connectDataProvider(FilteredExperienceList);

function connectDataProvider(
  Component: React.ComponentType<{ experiences: Experience[] }>,
): React.ComponentClass<{ filter?: string }> {

  return class ListDataProvider extends React.Component<
    { filter?: string },
    { experiences: Experience[] }
  >
   /*
    * ...
    */
   render(){
     return <Component experiences={this.state.experiences}/>
   }


```

- Assurez vous d'afficher la liste et votre `HOC` sera fonctionel vous pouvez aussi faire de `ListDataProvider` une classe anonyme.

```tsx
// ExperienceList.tsx

  /*
   * ...
   */
  return class  extends React.Component<
    { filter?: string },
    { experiences: Experience[] }
  >
   /*
    * ...
    */

```
