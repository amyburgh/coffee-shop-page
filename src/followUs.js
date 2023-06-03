import { main } from './main';
import { createHtmlElement } from './utils';

function render() {
  const followUs = document.createElement('div');
  followUs.classList.add('followUs-wrap');

  const section = createHtmlElement('section', null, ['socials'], '');
  const h2 = createHtmlElement('h2', '', ['social-title'], 'Follow Us');
  const socials = createHtmlElement('div', '', ['social-wrap'], '');
  const icons = createHtmlElement('ul', '', ['social-icons'], '');

  const items = [];

  items.forEach((item) => icons.appendChild(createHtmlElement('a')));

  main.appendChild(followUs);
}

export { render as renderFollowUs };
