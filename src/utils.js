// @param {type} html element
// @param {classes} array - array of classes

function createHtmlElement(type, id, classes, content) {
  const element = document.createElement(type);

  if (id) element.id = id;
  if (classes) classes.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;

  return element;
}

function createHtmlImg(src, alt, id, classes) {
  const element = new Image();

  if (id) element.id = id;
  if (classes) classes.forEach((myClass) => element.classList.add(myClass));
  element.src = src;
  element.alt = alt;

  return element;
}

export { createHtmlElement, createHtmlImg };
