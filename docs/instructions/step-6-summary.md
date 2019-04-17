---
id: instructions-step-6-summary
title: Etape 6 (sommaire)
sidebar_label: Etape 6 (sommaire)
---

Cette 6ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [componentDidUpdate](../react/react-componentdidupdate)

- [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-6/lab/front)

## Extraire l'affichage et la recupération de la liste dans un nouveau composant ([instructions détaillées](./step-6-detailed.md))

- React concepts utiles:

  - ComponentDidUpdate

- Dans cette étape vous allez devoir extraire le fetch de la liste et sont affichage de `ExperienceList` dans une nouvelle class `FilteredExperienceList`.

- `FilteredExperienceList` recevra donc en `props` le filtre saisie dans `ExperienceList` recupèrera la liste et l'affichera.

```tsx
interface State {
  experiences: Experience[];
  detailsShowedExperienceId?: string;
}

class FilteredExperienceList extends React.Component<
  { filter?: string },
  State
>
```

- `ExperienceList` quand a lui devra stocker le `filter` afin de le transmètre à `FilteredExperienceList`.

```tsx
  class ExperienceList extends React.Component<{}, { filter?: string }>
```

- Attention il faut que `FilteredExperienceList` gère le fait qu'à chaque changement de la props `filter` qu'il recoit, celle-ci déclenche la récupération de la liste filtrée.

```tsx
  componentDidUpdate(prevProps: { filter?: string })
```
