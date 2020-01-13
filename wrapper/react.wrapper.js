function setupComponents() {
  const reactEl = document.createElement('react-el');
  const vueEl = document.createElement('vue-el');

  const reactContainer = document.getElementById('react-container');
  if (reactContainer.children.length > 0) {
    reactContainer.removeChild(reactContainer.children[0]);
  }
  reactContainer.appendChild(reactEl);

  const vueContainer = document.getElementById('vue-container');
  if (vueContainer.children.length > 0) {
    vueContainer.removeChild(vueContainer.children[0]);
  }
  vueContainer.appendChild(vueEl);
}
