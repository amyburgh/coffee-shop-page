import { content } from './index.js';
import { navBar, renderNavbar } from './navbar.js';

const header = document.createElement('header');

function render() {
  renderNavbar();
  content.appendChild(header);
}

export { header, render as renderHeader };
