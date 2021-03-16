import products from "./products.json";
import productImages from "../images/*.png";
import productSvgs from "../images/*.svg";

//URL aus dem Browser auslesen
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("product"));
//daraus die ID ziehen
const currentId = parseInt(urlParams.get("product"), 10);
console.log(currentId);
//Das entsprechende object aus dem array suchen
const currentProduct = products.find(
  (product) => product.id === currentId
);

const productDetailContent = `
  <div class="container_pack_detail">
  <img class="wrapper_img_pack" src="${
    productImages[currentProduct.image]
  }" alt="Eine Packung Rustica-Kaffee"/>
</div>
<div class="type_name_detailpage"><p>${
  currentProduct.productName
}</p></div>
<div class="price_detailpage"><p>${
  currentProduct.price / 100 + "0"
}€</p></div>
<div class="description_short"><p>${
  currentProduct.descriptionShort
}</p></div>
<div class="contact_group">
  <select name="subject" id="choose_subject">
    <option value="">Dein Betreff</option>
    <option value="delivery">Fragen zur Lieferung</option>
    <option value="product">Fragen zum Produkt</option>
    <option value="distribution">Vertriebsfragen</option>
    <option value="just_for_fun">einfach nur so!</option>
  </select>
</div>
<div><img class="icons_detailpage" src=${
  productSvgs[currentProduct.icon1]
}</div>
<div><img class="icons_detailpage" src=${
  productSvgs[currentProduct.icon2]
}</div>
<div><img class="icons_detailpage" src=${
  productSvgs[currentProduct.icon3]
}</div>
<div><p>Beschreibung</p></div>
<div class="description_long">${currentProduct.description}</div>
`;

function singleProduct() {
  const productDetailSection = document.querySelector(".wrapper");
  productDetailSection.innerHTML = productDetailContent;
}

// export default singleProduct;

singleProduct();
