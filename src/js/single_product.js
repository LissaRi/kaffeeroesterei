import products from "./products.json";
import productImages from "../images/*.png";

function single_Product() {
  const contentContainer = document.querySelector('div.shop_coffee_variety');
  const contentTemplates = `
  ${products.forEach((product) => `
  <div class="container_pack_">
  <img class="img_pack" src="${productImages[product.image]}" alt="Eine Packung Rustica-Kaffee"/>
</div>
<div class="type_name_detailpage"><p>${product.productName}</p></div>
<div class="price_detailpage"><p>${product.price / 100 + "0"}€</p></div>
<div class="description_short"><p>${product.descriptionShort}</p></div>
<div class="contact_group">
  <select name="subject" id="choose_subject">
    <option value="">Dein Betreff</option>
    <option value="delivery">Fragen zur Lieferung</option>
    <option value="product">Fragen zum Produkt</option>
    <option value="distribution">Vertriebsfragen</option>
    <option value="just_for_fun">einfach nur so!</option>
  </select>
</div>
<div><p>Beschreibung</p></div>
<div class="description">${product.description}</div>
` 
)
.join("")}
`;
}

export default single_product;