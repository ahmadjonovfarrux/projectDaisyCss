const url = "https://dummyjson.com/product";
const div = document.querySelector(".collection__container");

function showData({ products }) {
  products.forEach((product) => {
    const { thumbnail, title, description, price } = product;
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.classList.add("card__image");
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    const text = document.createElement("p");
    text.classList.add("card__text");
    //
    image.src = thumbnail;
    cardTitle.textContent = title;
    text.textContent = description;
    card.append(image, cardTitle, text);
    div.appendChild(card);
  });
}
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    showData(data);
  })
  .catch((error) => {
    console.log(error);
  });
