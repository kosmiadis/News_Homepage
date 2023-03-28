const closeMenuBtn = document.querySelector('.close-hamburger')

function openNav() {
    document.querySelector("div.mobile-menu").style.width = "300px";
    document.querySelector("div.mobile-menu").style.display = 'flex';
    closeMenuBtn.style.opacity = '1'
}

function closeNav() {
    document.querySelector("div.mobile-menu").style.width = "0";
    closeMenuBtn.style.opacity = '0'
}


closeMenuBtn.addEventListener('click', e => {
    closeNav()
})