---
id: instructions-step-4-detailed
title: Etape 4 (détaillée)
sidebar_label: Etape 4 (détaillée)
---

## Afficher le détail d'une expérience ([instructions sommaires](./step-4-summary.md))

Nous souhaitons offir la possibilité à l'utilisateur d'avoir le détail d'une expérience en cliquant sur cette celle-ci. Un second clique sur l'expérience permet de revenir au summary (informations affichés dans les précédentes étapes). Une seul expérience peut avoir son détail affiché à un moment donné.

- React concepts utiles:

  - Handling Events (div.onClick)
  - Conditional Rendering
  - Lifting State Up

- Refactorer le composant `ExperienceCard` en extrayant les `children` de la `<div className={styles['experience-card']}>`dans un component nommé `ExperienceSummary`. Un composant ne pouvant renvoyer qu'un `React.Element`, wrappez les `children` dans une `<div></div>` ou dans `<></>` le deuxieme choix ne crée aucun element html : [voir ici](https://reactjs.org/docs/fragments.html#short-syntax)

```tsx
// ExperienceList.tsx
const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className={styles['experience-card']}>
    <ExperienceSummary experience={experience} />
  </div>
);
const ExperienceSummary = ({
  experience: { name, description, location, organisation },
}: {
  experience: Experience;
}) => (
  <>
    {/* <> or <div> */}
    <h5 className={styles['name']}>{name}</h5>
    <p className={styles['text']}>{description}</p>
    <p className={styles['text']}>{organisation}</p>
    <p className={styles['location']}>{location}</p>
    {/* </> or </div> */}
  </>
);
```

- Pour afficher les détails vous devez vous servir du component `ExperienceDetails` se trouvant dans [./front/src/experience/ExperienceDetails.tsx](./front/src/experience/ExperienceDetails.tsx). Ce dernier prend en `props` une experience de type `Experience`

```tsx
// Exemple
// ExperienceList.tsx

import Details from './ExperienceDetails';
/*
 * ...
 * ...
 * ...
 */
const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <div className={styles['experience-card']}>
    <Details experience={experience} />
  </div>
);
```

- Lors d'un clic sur une `ExperienceCard` vous devez :

  - Affichez le composant `ExperienceDetails` à la place du composant `ExperienceSummary`. Afin de faire cela utilisez le concept de `Conditional Rendering`.
  - Un second clic sur `ExperienceCard` permet de ré-afficher le summary (`ExperienceSummary`)
  - Pour mémoire, une seule expérience peut avoir son détail afficher à un instant t. Par exemple, je clique pour ouvrir le détail de l'expérience 'crème de la crème', ce dernier s'ouvre, je clique sur l'expérience BNP alors le detail de l'expérience 'crème de la crème' se ferme et celui de BNP s'ouvre.

- Vous aurez besoin d'ajouter deux 'props' à votre composant `ExperienceCard` :
  - `onClick` afin de stocker dans le composant `ExperienceList` quelle `ExperienceCard` doit afficher les détails
  - `showDetails` afin de préciser à une `ExperienceCard` si elle affiche `ExperienceDetails` ou `ExperienceSummary`

```tsx
const ExperienceCard = ({
  experience,
  showDetails,
  onClick,
}: {
  experience: Experience;
  showDetails: boolean;
  onClick: () => void;
}) => (
  <div
    className={styles['experience-card']}
    onClick={() => {
      /* here call onClick from the props */
    }}
  >
    {/*
     * Here you have to display
     * `ExperienceDetails` if showDetails === false
     * `ExperienceSummary` if showDetails === true
     */}
  </div>
);
```

- Dans le composant `ExperienceList` ajoutez `detailsShowedExperienceId?: string` au state de la class. Vous y garderez l'id de la dernière Experience cliqué.

```tsx
// ExperienceList.tsx
// in the return of render() function

/*
 * ...
 */
<div className={styles['list-container']}>
  {this.state.experiences.map(experience => (
    <ExperienceCard
      experience={experience}
      key={experience.id}
      showDetails={/* give the apropriate expression  */}
      onClick={() => {
        // here store the new selected id in the state
        // (or remove it if it's the same)
      }}
    />
  ))}
</div>
/*
 * ...
 */
```
