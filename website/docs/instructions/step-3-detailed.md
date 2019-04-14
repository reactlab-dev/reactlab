---
id: instructions-step-3-detailed
title: Etape 3 (détaillée)
sidebar_label: Etape 3 (détaillée)
---

## Proposer une search box pour rechercher dans la liste d'expérience ([instructions sommaires](./step-3-summary.md))

- React concepts utiles:

  - Handling Events (input.onChange)

- Ajouter un React input component en guise de Search Box. Pour le positionner et le styliser comme attendu, appuyez vous sur le fichier HTML [./front/html-css-integration/ExperienceList.searchBox.html](./front/html-css-integration/ExperienceList.searchBox.html).

```tsx
class ExperienceList extends React.Component<{}, State> {
  /*
   * constructor ...
   * compoenentDidMount ...
   */
  render() {
    return (
      <div className={styles['list-main-container']}>
        <div>
          Filter :
          <input
            className={styles['input']}
            onChange={async ({ target: { value } }) => {
              //
            }}
          />
        </div>
        // List
      </div>
    );
  }
}
```

- La recherche doit être assurée par le même endpoint REST qu'à l'étape 1. Pour cela, la fonction `fetchExperiences` prend en paramètre un filtre de type texte. Afficher le résultat renvoyée par le service.

- Pour chaque changements de l'input appelez la fonction `fetchExperiences` avec comme paramètre la nouvell valeur :

```tsx
onChange={async ({ target: { value } }) => {
    const filteredExperiences = await fetchExperiences(value);
}}
```

- Il ne vous reste plus qu'à attribuer la nouvelle valeur de la liste à votre `State`
