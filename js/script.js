const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu');
const menuItems = menu.querySelectorAll('a')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu--visible');
})

menuItems.forEach(el => {
    el.addEventListener('click', () => {
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--visible');
    })
})