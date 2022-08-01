const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu');
const menuItems = menu.querySelectorAll('a')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    menu.classList.toggle('menu__visible');
})

menuItems.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('burger__active');
        menu.classList.remove('menu__visible');
    })
})