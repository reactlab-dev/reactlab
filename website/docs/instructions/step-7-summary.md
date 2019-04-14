## Etape 7 : Encapsulez la liste des experiences dans un HOC ([instructions détaillées](./step-7-detailed.md))

- React concepts utiles:

  - HOC

- un Hight Order Component (HOC) est une fonction qui prend en paramètre un `React.ComponentType<any>` et qui retourne un `React.ComponentClass<any>`

- Vous devrez encapsuler l'affichage de la liste dans un `HOC`, lequel se chargera de récupérer et de transmètre la liste d'experiences au composant qu'il recevra en paramètre.

- Vous devrez créer une fonction `connectDataProvider` qui prend en paramètre un composant
  de type `React.ComponentType`

- A l'interieur de cette fonction vous devrez retourner une class qui effectura un `fecth` de la liste d'experiences et l'affichera en utilisant le composant recut en paramètre.
