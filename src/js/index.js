/*import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result);
*/

const navOverlay = document.querySelector('.navOverlay');

const openNavBtn = document.querySelector('.open-nav');
const closeNavBtn = document.querySelector('.close-nav');

openNavBtn.addEventListener('click', openNavHandler);
function openNavHandler(params) {
    alert('clicked');
    
}

