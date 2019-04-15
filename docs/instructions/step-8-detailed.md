---
id: instructions-step-8-detailed
title: Etape 8 (détaillée)
sidebar_label: Etape 8 (détaillée)
---

## Encapsulez la liste des experiences dans un HOC ([instructions sommaires](./step-8-summary.md))

- React concepts utiles:

  - HOC

- un Hight Order Component (HOC) est une fonction qui prend en paramètre un `React.ComponentType<any>` et qui retourne un `React.ComponentClass<any>`

- Vous devrez encapsuler l'affichage de la liste dans un `HOC`, lequel se chargera de récupérer et de transmètre la liste d'experiences au composant qu'il recevra en paramètre.

- Vous devrez créer une fonction `connectDataProvider` qui prend en paramètre un composant
  de type `React.ComponentType`

  ```tsx
  // ExperienceList.tsx

  function connectDataProvider(
    Composed: React.ComponentType<{ experiences: Experience[] }>,
    filter?: string,
  ): React.ComponentClass<{}>;
  ```

- A l'interieur de cette fonction vous devrez retourner une class qui effectura un `fecth` de la liste d'experiences et l'affichera en utilisant le composant recut en paramètre.

```tsx
// ExperienceList.tsx
// in connectDataProvider
return class extends React.Component<{}, { experiences: Experience[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      experiences: [],
    };
  }
  async componentDidMount() {
    const experiences = await fetchExperiences(filter);
    this.setState({
      experiences,
    });
  }

  render() {
    return <Composed experiences={this.state.experiences} />;
  }
};
```

- Extraire la l'affichage de la liste dans un nouveau component `DefaultListContainer`

```tsx
// ExperienceList.tsx

const DefaultListContainer = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  const [detailsShowedExperienceId, setDetailsShowedExperienceId] = useState();
  return (
    <div className={styles['list-container']}>
      {experiences.map(experience => (
        <ExperienceCard
          experience={experience}
          key={experience.id}
          showDetails={detailsShowedExperienceId === experience.id}
          onClick={() => {
            setDetailsShowedExperienceId(
              detailsShowedExperienceId !== experience.id
                ? experience.id
                : undefined,
            );
          }}
        />
      ))}
    </div>
  );
};
```

- Vous pouvez maintenant vous servir du composant que `connectDataProvider` retourne.

```tsx
// ExperienceList.tsx
// in ExperienceList render

const ConnectedList = connectDataProvider(
  DefaultListContainer,
  this.state.filter,
);
/*
 * ...
 */
<ConnectedList />;
```
