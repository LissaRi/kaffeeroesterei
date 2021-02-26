
const button = document.querySelector('.navigation_button');
const closeButton = document.querySelector('.navigation_close_button');
const nav = document.querySelector('.navigation_nav');

function navigation() {
    console.log("nav");
    button.addEventListener('click', () => {
        nav.classList.add("open");
        document.body.classList.add("noscroll");
    });
    closeButton.addEventListener('click', () => {
        nav.classList.remove("open");
        document.body.classList.remove("noscroll");
    });
}

export default navigation;