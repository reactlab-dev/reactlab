---
id: instructions-step-3-summary
title: Etape 3 (sommaire)
sidebar_label: Etape 3 (sommaire)
---

## [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-3/lab/front)

Cette 3ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [Handling Events](../react/react-handling-events)

## Proposer une search box pour rechercher dans la liste d'expérience ([instructions détaillées](./step-3-detailed.md))

- React concepts utiles:

  - Handling Events (input.onChange)

- Ajouter un React input component en guise de Search Box. Pour le positionner et le styliser comme attendu, appuyez vous sur le fichier HTML `./front/html-css-integration/ExperienceList.searchBox.html`.

- La recherche doit être assurée par le même endpoint REST qu'à l'étape 1. Pour cela, la fonction `fetchExperiences` prend en paramètre un filtre de type texte. Afficher le résultat renvoyée par le service.
