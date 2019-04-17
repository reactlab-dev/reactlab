---
id: instructions-step-5-detailed
title: Etape 5 (détaillée)
sidebar_label: Etape 5 (détaillée)
---

Cette 5ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [Hooks](../react/react-hooks)

## Permettre l'ajout de personnes dans le formulaire de création d'experience ([instructions sommaires](./step-5-summary.md))

- React concepts utiles:

  - Hook (useState)

Cliquez sur `Create my experience` vous arrivez sur la page Informations ensuit lorsque vous cliquez sur `Next step` vous êtes redirigé sur la pafe `Team` qui affiche le component `Team` de `./front/src/experience/create/Informations.tsx`
Vous allez devoir créer un formulaire pour renseigner le nom et le role d'un membre et en suite afficher la liste des membres : [HTML final](./front/html-css-integration/Team.html)

#### tâches:

- créer un **Function** Component nommé AddPeople permettant l'ajout d'une personne (cf `./front/html-css-integration/Team.html`) pour voir la structure HTML). Appuyez vous sur la fonctionnalité Hooks (useState) pour gérer l'état de ce composant. Ce component a en props une fonction `onAdd` qui retourne la personne crée de type `People` (./front/src/model/experience.ts). Assurez vous de désactiver le bouton si tous les champs ne sont pas saisies. Au clic sur le bouton 'add', vider les champs.

- implémenter La liste :
  - Afficher la liste des membres ajoutés à l'équipe
  - Un membre doit pouvoir être supprimé en un clic

```tsx
// Team.tsx
import { People } from '../../model/experience';
/*
 * ...
 */
export const AddPeople = (props: { onAdd: (people: People) => void }) => {
  return (
    <div className={styles['line-container']}>
      <div className={styles['input-container']}>
        <label className={styles['label']}>Name :</label>
        <input className={styles['input']} placeholder="Name" />
      </div>
      <div className={styles['input-container']}>
        <label className={styles['label']}>Role :</label>
        <input className={styles['input']} placeholder="Role" />
      </div>
      <button className={styles['button']}>Add</button>
    </div>
  );
};
```

- Pour utiliser un `useState` il faut d'abord l'importer

```ts
// Team.tsx
import React, { useState } from 'react';
```

- Ensuite `useState` retourne une valeur et et setter, utilisez `useState` dans la function `AddPeople` pour créer deux entrées dans le `state` : `name` et `role`;

```tsx
// Team.tsx
export const AddPeople = (props: { onChange: (people: People) => void }) => {
  const [name, setName] = useState();
  const [role, setRole] = useState();
  return ( /*...*/ )
}
```

- Maintenant vous pouvez mettre à jour votre `state` depuis les `onChange` des inputs

```tsx
// Team.tsx
// in AddPeople
<input
  className={styles['input']}
  type="text"
  placeholder="Role"
  onChange={({ target: { value } }) => {
    setRole(value);
  }}
/>
```

- Faites la même chose pour le `name`
- Il reste gérer le clique sur le bouton `Add`, on veut retourner un `People` ou rien à travers la props `onAdd`

```tsx
// Team.tsx
// in AddPeople
<button
  className={styles['button']}
  onClick={() => {
    if (name && role) {
      props.onAdd({
        name,
        role,
      });
    }
  }}
>
  Add
</button>
```

- Après avoir appelé `props.onAdd()` on veut vider les champs text, il faut d'abord attribuer une nouvelle valeur au `name` et `role`, il faut aussi prendre le `controlle` de l'input en lui attribuant une valeur (actuellement nous ne faisions que sauvgarder la valeur de l'input)

```tsx
// Team.tsx
// in AddPeople
<input
  className={styles['input']}
  type="text"
  placeholder="Role"
  value={role}
  onChange={({ target: { value } }) => {
    setRole(value);
  }}
/>
<button
  className={styles['button']}
  onClick={() => {
    if (name && role) {
      props.onAdd({
        name,
        role,
      });
      setRole('');
      setName('');
    }
  }}
>
  Add
</button>
```

- Vous avez maintenant un composant `AddPeople` fonctionnel. Passons à sont utilisation. Utilisez le juste après le `label` 'Team :'.

```tsx
// Team.tsx
// in Team
/*
* ...
*/
render() {
    return (
      <div className={styles['team-container']}>
        <label className={styles['title']}>Your team</label>
        <AddPeople
          onAdd={(people) => {}}
        />
        {/*
          * ...
          */}
    )
}

```

- Afin de stocker la liste de `People` vous allez devoir vous servire du state de `Team` en y ajoutant `teamList: People[]`

```tsx
// Team.tsx

interface State {
  team: People[];
}

class Team extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      team: [],
    };
  }
  /*
   * ...
   */
}
```

- Vous pouvez maintenant allimenter cette liste à chaque clique sur le `Add`

```tsx
// Team.tsx
// in Team
/*
* ...
*/
render() {
    return (
       <div className={styles['team-container']}>
        <label className={styles['title']}>Your team</label>
        <AddPeople
          onAdd={(people) => {
            this.setState({team: [...this.state.team, people]})
          }}
        />
        {/*
          * ...
          */}
    )
}

```

- Pour afficher cette liste ajouter le jsx suivant juste apres le `AddPeople`

```tsx
 /*
  * ...
  */
  <AddPeople {/* ... */} />
  <div className={styles['people-container']}>
    {this.state.team.map(({ name, role }, indexToFound) => (
      <div
        className={styles['people']}
        key={`${name}+${indexToFound}+${role}`}
      >
        <span className={styles['people-name']}>{name} - {role} </span>

        <img
          src='/images/close_icon_black.png'
          width='16'
          onClick={}
        />
      </div>
    ))}
  </div>
 /*
  * ...
  */
```

- Il ne manque qu'a retirer un element de la liste au clique sur `X`, pour cela l'utilisation de `filter` sur la liste est conseillé.

```tsx
{ this.state.team.map((people, indexTofind) => {

/* ... */
    <img
          src='/images/close_icon_black.png'
          width='16'
          onClick={() => {
            const newTeam = this.state.team.filter((elem, peopleIndex) => {
            return peopleIndex !== indexToFind ; // true is returned elem is push in newTeam
            })
            this.setState({team: newTeam});
          }}
    />

/* ... */

})
```
