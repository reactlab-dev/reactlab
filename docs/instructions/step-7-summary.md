---
id: instructions-step-7-summary
title: Etape 7 (sommaire)
sidebar_label: Etape 7 (sommaire)
---

Cette 7ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [Render Props](../react/react-render-props)

## Afficher la liste d'experiences en utilisant le Props Rendering ([instructions détaillées](./step-7-detailed.md))

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

- Dans `FilteredExperienceList` devient une classe qui n'affiche que la liste. Utilisez `FilteredExperienceList` dans `ListDataProvider` afin d'afficher la liste

* Maintenant vous pouvez passer la class `FilteredExperienceList` en `props` à `ListDataProvider`,

```tsx
// ListDataProvider's props

interface ListDataProviderProps {
  filter?: string;
  render: React.ComponentType<{ experiences: Experience[] }>;
}
```

- Remplacez `<FilteredExperienceList/>` par `render` recut en `props`
