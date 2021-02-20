
function toggleMenu(navigation_list) {
const menuOpen = nav.classList.contains('.switch');
menuOpen.classList.toggle('.switch')
}



function navigation() {
    const button = document.querySelector('.navigation_button');
    const nav = document.querySelector('.navigation_nav');
    const background = document.querySelector('.navigation_background');

    button.addEventListener('click', () => toggleMenu(navigation_list))
}


// background && nav.classList.add('.switch'))

export default navigation;