import products from "./products.json";

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
    <div class="box_shop">
        <div class="shop_coffee_variety">
            <div class="shop_coffee_variety_img"></div>
            <div class="type_name">${product.productName}</div>
            <div class="shop_coffee_variety_price">${product.price / 100 + "0"}€</div>
            <div class="shop_coffee_variety_icons"></div>
            <div class="description">${product.description}</div>
            <button class="cart_button" data-product-id="${product.id}">In den Warenkorb</button>
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



// <div class="wrapper_type">
// <div class="img_coffee_bag"></div>
// <div class="type_name">${product.productName}</div>
// <div class="price">${product.price / 100}€</div>
// <div class="icons"></div>
// <div class="description">${product.description}</div>
// </div>