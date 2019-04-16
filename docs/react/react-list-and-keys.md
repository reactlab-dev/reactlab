---
id: react-list-and-keys
title: List & keys
sidebar_label: List & keys
---

## Afficher plusieurs éléments à partir d'une liste

Vous pouvez utiliser la méthode Array.prototype.map pour transformer une simple liste d'objet JavaScript en une liste de React Elements.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <div className={styles['list-item']}>{number}</div>
);
  
const element = <div className={styles['list']}>{listItems}</div>;
```

## Keys

*key* est un attribut spécial que vous devez inclure quand vous créez une liste d’éléments.

Les clés/keys aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau afin d’apporter aux éléments une identité stable.

```tsx
interface NumberListProps { numbers: number[] };
  
function NumberList({ numbers } : NumberListProps) {
  return (
    <div className={styles['list']}>
      {numbers.map((number) =>
        <div key={number.toString()} className={styles['list-item']}>
          {number}
        </div>
      )}
    </div>
  );
}
```

**Eviter d'utiliser l'index de l'élément dans le tableau** si cet index est amené à changer (par exemple en cas de suppression ou d'insertion d'un élément). Veillez à trouver un identifiant stable. Si vous utilisez l'index, cela fonctionnera mais peut entrer des problèmes de performance.

```tsx
interface NumberListProps { numbers: number[] };
  
function NumberList({ numbers } : NumberListProps) {
  return (
    <div className={styles['list']}>
      {numbers.map((number, index) =>
        // avoid to use index
        <div key={index} className={styles['list-item']}>
          {number}
        </div>
      )}
    </div>
  );
}
```
