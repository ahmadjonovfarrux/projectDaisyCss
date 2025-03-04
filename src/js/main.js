import { getData } from "./fetchData.js";
import { upDateUI } from "./upDataUI.js";
const url = "https://dummyjson.com/product";

getData(url)
  .then((data) => upDateUI(data))
  .catch((error) => {
    console.log(error);
  });
