---
id: react-render-props
title: Render Props
sidebar_label: Render Props
---

Veuillez consulter [la documentation officielle sur les Render Props](https://reactjs.org/docs/render-props.html) avant de lire la suite.

La documentation officielle de React donne la définition suivante:

"*Le terme Render Props fait référence à une technique qui consiste à partager du code entre des composants React en utilisant une prop dont la valeur est une fonction qui renvoie un React element.*"

Pour mémoire, la définition d'une Function Component est:
"*Un Function Component est une fonction, avec un seul argument optionnel nommé *props* ou *properties* et correspondant à un simple Javascript object, qui renvoit un React Element.*"

Ainsi un Function Component peut être une Render Props. Par contre, toute fonction Render Props n'est pas un Function Component. En effet, une fonction avec plusieurs argument ou ayant un premier argument qui n'est pas un objet, n'est pas un Function Component. Toute ses fonctions qui ne sont pas des components, peuvent cependant toutes être transformées en Function Component en englobant par exemple les multiples paramètres dans un unique objet JavaScript. Ainsi dire qu'une Render Props est un Function Component ne nous limiterait pas dans les cas d'usage et permet d'employer la syntaxe JSX (\<RenderPropsComponent a='a' b='b' /\>).

De plus la documentation donne en exemple la bibliothèque React Router comme utilisant la technique de Render Props. Hors cette dernière, accepte des Class Components en propriété Render Props.

La définition de la documentation officielle n'est ainsi selon nous pas une très bonne définition. Elle devrait être plutôt: une Render Props est une propriété d'un composant acceptant un autre composant.
