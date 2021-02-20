import products from "./products.json";
console.log (products);



function shop () {
    const productContainer = document.querySelector('.shop-container');
    const typeTemplates = `
    ${products.map((product) => `
    <div class="wrapper_type">
        <div class="img_coffee_bag"></div>
        <div class="type_name">${product.productName}</div>
        <div class="price">${product.price / 100}€</div>
        <div class="icons"></div>
        <div class="description">${product.description}</div>
    </div>
    `
    )
    .join("")}
    `;

    productContainer.innerHTML = typeTemplates;
}

export default shop;



