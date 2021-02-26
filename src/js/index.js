import navigation from "./navigation";
import shop from "./shop";
// import single_product from "./single_product";

navigation();
console.log(window.location);
if (window.location.pathname === "/_shop/index.html") {
    shop();
}

// single_product();