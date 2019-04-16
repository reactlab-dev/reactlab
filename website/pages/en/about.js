/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function About() {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>A propos</h1>
          </header>
          <p>Ce Lab a été construit dans le cadre de la conférence {' '}
          <a href="https://www.devoxx.fr/">
          Devoxx France
          </a> 2019 par {' '}
          <a href="https://github.com/ThierryAbalea">
          Thierry Abaléa
          </a> & {' '}
          <a href="https://github.com/EliottB">
          Eliott Balette
          </a>.</p>
        </div>
        <div className="post">
          <header className="postHeader">
            <h1>Remerciements</h1>
          </header>
          <p>Nous tenons à remercier les équipes en charge de <b>React</b>, la documentation française officielle de React (<b>Christophe Porteneuve</b>), <b>Codesandbox</b>, <b>Docusaurus</b>, <b>MDX</b> et <b>MDX Deck</b>.</p>
          <p>Nous remercions également l'équipe de notre entreprise <b>crème de la crème</b> pour leur soutien et leur aide. Merci tout spécial à <b>Pia Sabran</b>, UX/UI Designer, qui a réalisé en un temps record le design de la petite application associée à ce Lab. Merci à son mentor <b>Hugo Demanuel</b>. Enfin merci à <b>Mélanie Bonnet</b> de nous aider dans la préparation de ce lab.</p>
        </div>
      </Container>
    </div>
  );
}

module.exports = About;
