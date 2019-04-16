---
id: react-conditional-rendering
title: Conditional Rendering
sidebar_label: Conditional Rendering
---

Vous pouvez décider d'évaluer une expression JSX plutôt qu'une autre de manière conditionnelle en utilisant différentes techniques.

### if statement

Vous pouvez utiliser la déclaration *if ... else*.

```tsx
const formatName =
  ({ firstName, lastName }: Person) => `${firstName} ${lastName}`;
  
interface Person {
  firstName: string;
  lastName: string;
}
  
interface HelloWorldProps {
  person?: Person;
}
  
const HelloWorld = (props: HelloWorldProps) => {
  if (props.person) {
    return <div>Hello {formatName(props.person)}</div>;
  } else {
    return <div>Hello World</div>;
  }
};
```

### Inline If avec l'opérateur logique &&

Dans certains cas, plutôt que d'utiliser le mot clé *if*, il est plus pratique et plus concis de recourir à une condition à la volée (Inline If) avec l'opérateur &&.

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```

### Opérateur ternaire conditionnel (... ? ... : ...)

```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length === 0 ? (
        <h2>
          Sorry no new messages :(
        </h2>) : (
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
        )
      }
    </div>
  );
}
```