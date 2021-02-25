import products from "./products.json";
import productImages from "../images/*.png";


let cart =[];

function handleButtonClick(event) {
    const {productId} = this.dataset;
    //console.log(productID) irgendwas läuft hier schon nicht, weil die productId nicht definiert ist. Wieso nicht??
    const chosenProduct = product.find((product) => product.id === productId);

    cart.push();
}


function shop () {
    const productContainer = document.querySelector('.shop-container');
    const typeTemplates = `
    ${products.map((product) => `
    <div class="wrapper_shop">
        <div class="shop_coffee_variety">
            <div class="container_pack"><img class="img_pack" src="${productImages[product.image]}" alt="Eine Packung Rustica-Kaffee" /></div>
            <div class="type_name"><a href="../_product/index.html">${product.productName}</a></div>
            <div class="price"><p>${product.price / 100 + "0"}€</p></div>
            <div class="container_icons"><img class="icons" src="${productImages[product.icon1]}"/><img class="icons" id="icon_middle" src="${productImages[product.icon2]}"/><img class="icons" src="${productImages[product.icon3]}"/></div>
          
        </div>
    </div>
    `
    )
    .join("")}
    `;

    productContainer.innerHTML = typeTemplates;

    const cartButtons = document.querySelectorAll(".cart_button");
    console.log(cartButtons)

    cartButtons.forEach((cartButton) => 
    cartButton.addEventListener("click", handleButtonClick)
    );
}

export default shop;

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