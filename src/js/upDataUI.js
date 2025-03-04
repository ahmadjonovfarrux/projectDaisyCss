const template = document.querySelector("template");
const collection = document.querySelector(".collection__container");

export function upDateUI({ products }) {
  products.forEach((product) => {
    const { thumbnail, price, title, description } = product;
    const clone = template.content.cloneNode(true);
    const h3 = clone.querySelector(".card__title");
    const text = clone.querySelector(".card__text");
    const pPrice = clone.querySelector(".card__price");
    const image = clone.querySelector(".card__image");
    h3.textContent = title;
    text.textContent = description;
    image.src = thumbnail;
    pPrice.textContent = price;
    collection.appendChild(clone);
  });
}
