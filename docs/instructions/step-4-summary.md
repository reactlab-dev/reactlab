---
id: instructions-step-4-summary
title: Etape 4 (sommaire)
sidebar_label: Etape 4 (sommaire)
---

## Afficher le détail d'une expérience ([instructions détaillées](./step-4-detailed.md))

Nous souhaitons offir la possibilité à l'utilisateur d'avoir le détail d'une expérience en cliquant sur cette celle-ci. Un second clique sur l'expérience permet de revenir au summary (informations affichés dans les précédentes étapes). Une seul expérience peut avoir son détail affiché à un moment donné.

- React concepts utiles:

  - Handling Events (div.onClick)
  - Conditional Rendering
  - Lifting State Up
  - Fragments

- Refactorer le composant `ExperienceCard` en extrayant les `children` de la `<div className={styles['experience-card']}>`dans un component nommé `ExperienceSummary`. Un composant ne pouvant renvoyer qu'un `React.Element`, wrappez les `children` dans une `<div></div>` ou dans `<></>` le deuxieme choix ne crée aucun element html : [voir ici](https://reactjs.org/docs/fragments.html#short-syntax)

* Pour afficher les détails vous devez vous servir du component `ExperienceDetails` se trouvant dans `./front/src/experience/ExperienceDetails.tsx`. Ce dernier prend en `props` une experience de type `Experience`

- Lors d'un clic sur une `ExperienceCard` vous devez :
  - Affichez le composant `ExperienceDetails` à la place du composant `ExperienceSummary`. Afin de faire cela utilisez le concept de `Conditional Rendering`.
  - Un second clic sur `ExperienceCard` permet de ré-afficher le summary (`ExperienceSummary`)
  - Pour mémoire, une seule expérience peut avoir son détail afficher à un instant t. Par exemple, je clique pour ouvrir le détail de l'expérience 'crème de la crème', ce dernier s'ouvre, je clique sur l'expérience BNP alors le detail de l'expérience 'crème de la crème' se ferme et celui de BNP s'ouvre.
