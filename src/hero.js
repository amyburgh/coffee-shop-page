import { main } from './main';
import heroImage from './hero.jpg';

function render() {
  const hero = document.createElement('div');

  const img = new Image();
  img.src = heroImage;
  img.classList.add('heroImage');

  hero.append(img);

  main.appendChild(hero);
}

export { render as renderHero };
