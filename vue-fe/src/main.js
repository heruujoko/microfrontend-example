import Vue from 'vue';
import Profile from './components/Profile.vue'

class VueElement extends HTMLElement {
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, {attributes: true});
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
    this.shadowRoot.innerHTML = `
            <div id="component"></div>
        `;
    this.vue = new Vue({
      render(r) {
        return r(Profile);
      }
    });

    const comp = this.shadowRoot.getElementById('component');
    this.vue.$mount(comp);
  }
}

customElements.define('vue-el', VueElement);
