import { header } from './header';
import { createHtmlElement, createHtmlImg } from './utils.js';
import sourceLogo from './logo-black.png';

const menu = ['Menu', 'About Us', 'Find Us'];

function render() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar-wrap');

  const navList = document.createElement('ul');
  navList.classList.add('nav-items');

  menu.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const link = document.createElement('a');
    link.href = '#';
    link.innerText = item;

    const caret = document.createElement('i');
    caret.classList.add('fa-solid', 'fa-caret-down');

    li.append(link, caret);
    navList.appendChild(li);
  });

  const logo = new Image();
  logo.src = sourceLogo;
  logo.classList.add('nav-logo', 'logo');

  navbar.append(logo, navList);
  header.appendChild(navbar);
}

export { render as renderNavbar };
