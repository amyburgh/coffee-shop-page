import { content } from './index.js';
import { renderFollowUs } from './followUs.js';
import { renderHeader } from './header.js';
import { renderHero } from './hero.js';

const main = document.createElement('main');

function render() {
  renderHero();
  content.appendChild(main);
}

export { main, render as renderMain };
