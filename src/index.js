import './style.css';

import { renderHeader } from './header.js';
import { renderMain } from './main.js';
import { renderFooter } from './footer.js';

// import { renderNav } from './navbar.js';
// import { renderHero } from './hero.js';
// import { renderAboutUs } from './aboutUs.js';
// import { renderFindUs } from './findUs.js';
// import { renderFollowUs } from './followUs.js';
// import { renderFooter } from './footer.js';

console.log('Running...');

const content = document.querySelector('#content');

renderHeader();
renderMain();
renderFooter();

export { content };
