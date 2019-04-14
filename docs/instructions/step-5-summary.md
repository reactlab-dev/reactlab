---
id: instructions-step-5-summary
title: Etape 5 (sommaire)
sidebar_label: Etape 5 (sommaire)
---

## Etape 5 : Permettre l'ajout de personnes dans le formulaire de création d'experience ([instructions détaillées](./step-5-detailed.md))

- React concepts utiles:

  - Hook (useState)

Depuis [la page Informations](http://localhost:3001/experience/create/informations) lorsque vous cliquez sur `Suivant` vous êtes redirigé sur la route [http://localhost:3000/experience/create/team](http://localhost:3001/experience/create/team) qui affiche le component `Team` de [./front/src/experience/create/Informations.tsx](./front/src/experience/create/Informations.tsx)

Vous allez devoir créer un formulaire pour renseigner le nom et le role d'un membre et en suite afficher la liste des membres : [HTML final](./front/html-css-integration/Team.html)

#### tâches:

- créer un **Function** Component nommé AddPeople permettant l'ajout d'une personne (cf [HTML final](./front/html-css-integration/Team.html) pour voir la structure HTML). Appuyez vous sur la fonctionnalité Hooks (useState) pour gérer l'état de ce composant. Ce component a en props une fonction `onAdd` qui retourne la personne crée de type [People](./front/src/model/experience.ts). Assurez vous de désactiver le bouton si tous les champs ne sont pas saisies. Au clic sur le bouton 'add', vider les champs.

- implémenter La liste :
  - Afficher la liste des membres ajoutés à l'équipe
  - Un membre doit pouvoir être supprimé en un clic
