import navigation from "./navigation";
import shop from "./shop";
import singleProduct from "./singleProduct";

navigation();
console.log(window.location);
if (window.location.pathname === "/_shop/index.html") {
    shop();
}

// singleProduct();