const navOverlay = document.querySelector('.nav-overlay');

const openNavBtn = document.querySelector('.open-nav');
const closeNavBtn = document.querySelector('.close-nav');

openNavBtn.addEventListener('click', openNavHandler);
function openNavHandler (){
    navOverlay.classList.remove("hidden");
}

closeNavBtn.addEventListener('click', closeNavHandler);
function closeNavHandler (){
    navOverlay.classList.addplace("hidden");
}