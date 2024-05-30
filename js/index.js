import { cardComponents } from "../components/cardComponents.js";
import { products } from "../data/products.js";
let readerArea = document.querySelector("#readerArea");

products.map((product) => (readerArea.innerHTML += cardComponents(product)));