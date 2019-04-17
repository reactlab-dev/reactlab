---
id: instructions-step-9-detailed
title: Etape 9 (détaillée)
sidebar_label: Etape 9 (détaillée)
---

Cette 9ème étape nécessite d'avoir pris connaissance de la page du cours React suivante:

- [Context API](https://reactjs.org/docs/context.html)

## Faire communiquer des composants via la Context API ([instructions sommaires](./step-8-summary.md))

- React concepts utiles:

  - [Context API](https://reactjs.org/docs/context.html)

- L'objectif est d'utiliser la [Context API](https://reactjs.org/docs/context.html) pour faire communiquer les 3 composants afin de:
  - transmettre le filter de la Search Box (input) au Data Provider qui l'utilise pour l'appel REST
  - transmettre la liste d'expérience du Data Provider au FilteredExperienceList 
- Le Data Provider sera le Context Provider. L'interface du contexte est la suivante:
```tsx
interface DataProviderContext {
  experiences: Experience[];
  onFilterChange: (filter: string) => void;
}
```
- Le Data Provider peut ressemble à ceci:
```tsx
class DataProvider extends React.Component<
  {},
  { experiences: Experience[]; filter?: string }
> {
  // ...

  render() {
    return (
      <Provider
        value={{
          experiences: this.state.experiences,
          onFilterChange: (filter: string) => {
           // TODO
          },
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
```
- La Search Box sera un Consumer. Voici la trame:
```tsx
<Consumer>
    {(context: DataProviderContext) => (
        <div className={styles['filter-container']}>
        <input
            className={styles['filter-input']}
            onChange={async ({ target: { value: filter } }) => {
                // TODO
            }}
        />
        </div>
    )}
</Consumer>
```
- Enfin voici le squelette du composant FilteredExperienceList:
```tsx
interface State {
  detailsShowedExperienceId?: string;
}
class FilteredExperienceList extends React.Component<{}, State> {
  // ...
  render() {
    return (
      <div className={styles['list-container']}>
        <Consumer>
          {(context: DataProviderContext) =>
            // ...
          }
        </Consumer>
      </div>
    );
  }
}
```
