---
id: instructions-step-5-summary
title: Etape 5 (sommaire)
sidebar_label: Etape 5 (sommaire)
---

## [Sandbox](https://codesandbox.io/s/github/reactlab-dev/reactlab/tree/step-5/lab/front)

Cette 5ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [Hooks](../react/react-hooks)

## Permettre l'ajout de personnes dans le formulaire de création d'experience ([instructions détaillées](./step-5-detailed.md))

- React concepts utiles:

  - Hook (useState)

Cliquez sur `Create my experience` vous arrivez sur la page Informations ensuit lorsque vous cliquez sur `Next step` vous êtes redirigé sur la pafe `Team` qui affiche le component `Team` de `./front/src/experience/create/Informations.tsx`

Vous allez devoir créer un formulaire pour renseigner le nom et le role d'un membre et en suite afficher la liste des membres : `./front/html-css-integration/Team.html`

#### tâches:

- créer un **Function** Component nommé AddPeople permettant l'ajout d'une personne (`./front/html-css-integration/Team.html` pour voir la structure HTML). Appuyez vous sur la fonctionnalité Hooks (useState) pour gérer l'état de ce composant. Ce component a en props une fonction `onAdd` qui retourne la personne crée de type `People` dans (./front/src/model/experience.ts). Assurez vous de désactiver le bouton si tous les champs ne sont pas saisies. Au clic sur le bouton 'add', vider les champs.

- implémenter La liste :
  - Afficher la liste des membres ajoutés à l'équipe
  - Un membre doit pouvoir être supprimé en un clic
