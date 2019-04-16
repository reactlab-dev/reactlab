---
id: react-hello-world
title: Hello World
sidebar_label: Hello World
---

La plus petite application React possible ressemble à ceci:

La partie HTML:

```html
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
```


La partie Javascript:

```js
ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('root')
);
```

Veuillez noter l'utilisation de ce qui semble être du HTML dans le code JavaScript. Il s'agit en faite de code JSX.
