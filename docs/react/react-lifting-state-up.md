---
id: react-lifting-state-up
title: Lifting State Up
sidebar_label: Lifting State Up
---

## La problèmatique de partage d'état

Dans certains cas, il peut être intéressant de communiquer ou synchroniser l'état d'un composant avec un autre composant qui n'est pas un descendant de ce premier composant (l'ensemble des composants forme un graphe). Ils peuvent être par exemple au même niveau de hiérarchie dans l'arbre des composants.

En React, le principale moyen de communiquer des données d'un composant à un autre est d'utiliser les properties de ces sous-composants. On parle ainsi de **Top-Down ou Unidirectional Data Flow**.

Pour rappel, il n'est pas possible de modifier ses propres properties. De plus le State est local au composant. On peut évidemment communiquer le State en properties de ses sous-composants mais encore une fois il s'agit d'une approche Top-Down.

## Solution: Lifting State Up

Afin de résoudre cette problèmatique, l'approche est de faire communiquer l'état des composants à leur plus proche ancêtre commun. On parle alors de **Lifting State Up** (faire remonter l’état).

Il suffit pour cela qu'un composant donne en properties au composant descendant une fonction callback pour que ce dernier puisse remonter son état.

Voici un exemple de 2 composants TemperatureInput au même niveau synchronisés:

```jsx
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}
```
