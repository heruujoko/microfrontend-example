// reference to https://github.com/chriskitson/micro-frontends-with-web-components/blob/master/micro-fe-react/src/index.js

import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import htmlToReact from 'html-to-react';
import StatusLabel from './components/StatusLabel';

class ReactElement extends HTMLElement {
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    render(
      <StatusLabel />, this
    )
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  parseHTMLtoReact() {
    return html && new htmlToReact.Parser().parse(html);
  }
}

customElements.define('react-el', ReactElement);
