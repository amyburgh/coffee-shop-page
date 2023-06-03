import { content } from './index.js';
import { createHtmlElement, createHtmlImg } from './utils.js';
import sourceLogo from './logo-white.png';

function render() {
  const footer = document.createElement('footer');
  footer.classList.add('footer-wrap');

  const left = createHtmlElement(
    'div',
    null,
    ['footer-info', 'footer-info-left'],
    '© 2023 AM COFFEE BAR . ALL RIGHTS RESERVED'
  );
  const logo = createHtmlImg(sourceLogo, 'AM Logo', null, [
    'footer-info',
    'footer-info-middle',
    'logo',
  ]);
  const right = createHtmlElement(
    'div',
    null,
    ['footer-info', 'footer-info-right'],
    'BECAUSE WE LOVE COFFEE'
  );

  footer.append(left, logo, right);
  content.appendChild(footer);
}

export { render as renderFooter };
