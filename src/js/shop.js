import products from "./products.json";
import productImages from "../images/*.png";

function handleButtonClick() {
  const productId = parseInt(this.dataset.productId, 10);
  console.log(productId);
  const chosenProduct = products.find(
    (product) => product.id === productId
  );

  // sucht den aktuellen Warenkorbinhalt aus dem local storage
  const currentCart = JSON.parse(localStorage.getItem("cart"));

  //Produkte im Warenkorb im local storage speichern und aktualisieren
  if (currentCart !== null) {
    const updatedCart = [...currentCart, chosenProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([chosenProduct]));
  }
}

function shop() {
  const productContainer = document.querySelector(".shop-container");
  const typeTemplates = `
    ${products
      .map(
        (product) => `
    <div class="wrapper_shop">
        <div class="shop_coffee_variety">
            <div class="container_pack"><img class="img_pack" src="${
              productImages[product.image]
            }" alt="Eine Packung Rustica-Kaffee" /></div>
            <div class="type_name"><a href="/_product/index.html?product=${
              product.id
            }">${product.productName}</a></div>
            <div class="price"><p>${
              product.price / 100 + "0"
            }€</p></div>
            <div class="container_icons"><img class="icons" src="${
              productImages[product.icon1]
            }"/><img class="icons" id="icon_middle" src="${
          productImages[product.icon2]
        }"/><img class="icons" src="${
          productImages[product.icon3]
        }"/></div>
            <button class="add_to_cart_button" data-product-id="${
              product.id
            }">In den Warenkorb</button>
        </div>
    </div>
    `
      )
      .join("")}
    `;

  productContainer.innerHTML = typeTemplates;

  const addToCartButtons = document.querySelectorAll(
    ".add_to_cart_button"
  );
  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleButtonClick)
  );
}

export default shop;

// der Warenkorb soll öffnen und schließen. noch funzt das nicht. mit if??
const openCart = document.getElementById("shopping-cart-icon");
openCart.addEventListener("click", function (event) {
  if (event) {
    document.getElementById("shopping-cart").innerHTML = `
    <div class="wrapper_cart">
      <div><h1>Warenkorb</h1><p>1 Produkt</p></div>
      <div class="product_quantity"><p>1 Produkt wurde erfolgreich dem Warenkorb hinzugefügt</p></div>
    

      <div class="wrapper_sumup">
        <table>
          <tr>
            <td>Zwischensumme</td>
            <td>6,90€</td>
          </tr>
          <tr>
            <td>Versandkosten</td>
            <td>3,90€</td>
          </tr>
          <tr>
            <td>Gesamtbetrag</td>
            <td>10,80€</td>
          </tr>
        </table>
      </div>

    </div>
`;
    //   const cartClose = document.createElement("button");
    //   const text = document.createTextNode("Close this shit");
    //   cartClose.appendChild(text);
  }
});

// function initShop() {
//     const productTemplates = products.map(fillTemplate).join("");
//     const shop = document.querySelector(".shop");
//     shop.innerHTML = productTemplates;
//   }

//   export default initShop;

//   im deinem Javascript-File dann einfach
//   initShop()

// <div class="wrapper_type">
// <div class="img_coffee_bag"></div>
// <div class="type_name">${product.productName}</div>
// <div class="price">${product.price / 100}€</div>
// <div class="icons"></div>
// <div class="description">${product.description}</div>
// </div>

// <div class="description">${product.description}</div>
