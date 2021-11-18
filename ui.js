export const clearContent = () => {
  const text = document.getElementById("container");

  while (text.firstChild) {
    text.firstChild.remove();
  }
};

const createText = (words, image) => {
  const text = words;

  const textEl = document.createElement("p");
  textEl.appendChild(document.createTextNode(text));

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", image);

  const div = document.createElement("div");
  div.appendChild(imgEl);
  div.appendChild(textEl);

  return div;
};

export const appendContent = (words, image) => {
  const text = document.getElementById("container");
  const item = createText(words, image);

  text.appendChild(item);
};
