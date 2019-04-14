/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('instructions', language)}>
              C'est parti !
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={props.padding}
    id={props.id}
    background={props.background}
  >
    <GridBlock
      align={props.align}
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);
Block.defaultProps = {
  padding: ['bottom', 'top'],
};

const Codesandbox = props => (
  <Block layout="oneColumn" {...props}>
    {[
      {
        title: 'Démarrer immédiatement avec Codesandbox',
        content: `La première étape commence [ici](https://codesandbox.io/s/l9lo1jkn8l)`,
      },
    ]}
  </Block>
);

const LocalDevelopment = props => (
  <Block layout="oneColumn" background="light" {...props}>
    {[
      {
        title: 'ou faites le choix de développer en local sur votre ordinateur',
        content: `Pour celà exécuter les commandes suivantes:

\`\`\`sh
git clone git@github.com:reactlab-dev/reactlab.git
cd reactlab ; yarn ; yarn start
\`\`\``,
      },
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Codesandbox align="left" />
          <LocalDevelopment align="left" />
        </div>
      </div>
    );
  }
}

module.exports = Index;