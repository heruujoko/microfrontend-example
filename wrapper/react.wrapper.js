function setupComponents() {
  const reactEl = document.createElement('react-el');

  const reactContainer = document.getElementById('react-container');
  if (reactContainer.children.length > 0) {
    reactContainer.removeChild(reactContainer.children[0]);
  }
  reactContainer.appendChild(reactEl);
}
