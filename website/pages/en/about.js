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
      </Container>
    </div>
  );
}

module.exports = About;
