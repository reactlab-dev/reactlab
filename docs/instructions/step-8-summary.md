---
id: instructions-step-8-summary
title: Etape 8 (sommaire)
sidebar_label: Etape 8 (sommaire)
---

## [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-8/lab/front)

Cette 8ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [High-Order Component](../react/react-hoc)

## Encapsulez la liste des experiences dans un HOC ([instructions détaillées](./step-8-detailed.md))

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

- Dans notre cas `connectDataProvider` prend un argument : `Component: React.ComponentType<{ experiences: Experience[] }>` et retourne un `React.ComponentClass<{ filter?: string }>`. De manière à se que la class `ListDataProvider` ne reçoive plus `render` et se serve de `Component` pour afficher la liste.

```tsx
// ExperienceList.tsx

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

```

- Assurez vous d'afficher la liste et votre `HOC` sera fonctionel vous pouvez aussi faire de `ListDataProvider` une classe anonyme.
