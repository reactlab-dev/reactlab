---
id: instructions-step-5-detailed
title: Etape 5 (détaillée)
sidebar_label: Etape 5 (détaillée)
---

## Permettre l'ajout de personnes dans le formulaire de création d'experience ([instructions sommaires](./step-5-summary.md))

- React concepts utiles:

  - Hook (useState)

Depuis [la page Informations](http://localhost:3001/experience/create/informations) lorsque vous cliquez sur `Suivant` vous êtes redirigé sur la route [http://localhost:3000/experience/create/team](http://localhost:3001/experience/create/team) qui affiche le component `Team` de [./front/src/experience/create/Informations.tsx](./front/src/experience/create/Informations.tsx)

Vous allez devoir créer un formulaire pour renseigner le nom et le role d'un membre et en suite afficher la liste des membres : [HTML final](./front/html-css-integration/Team.html)

#### tâches:

- créer un **Function** Component nommé AddPeople permettant l'ajout d'une personne (cf [HTML final](./front/html-css-integration/Team.html) pour voir la structure HTML). Appuyez vous sur la fonctionnalité Hooks (useState) pour gérer l'état de ce composant. Ce component a en props une fonction `onAdd` qui retourne la personne crée de type [People](./front/src/model/experience.ts). Assurez vous de désactiver le bouton si tous les champs ne sont pas saisies. Au clic sur le bouton 'add', vider les champs.

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
    <div className={styles['inline']}>
      <label className={styles['label-inline']}>Name :</label>
      <input className={styles['input-inline']} />
      <label className={styles['label-inline']}>Role :</label>
      <input className={styles['input-inline']} />
      <button className={styles['button-inline']}>Add</button>
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
<input
  className={styles['input-inline']}
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
<button
  className={styles['button-inline']}
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
<input
  className={styles['input-inline']}
  type="text"
  placeholder="Role"
  value={role}
  onChange={({ target: { value } }) => {
    setRole(value);
  }}
/>
<button
  className={styles['button-inline']}
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

- Vous avez maintenant
