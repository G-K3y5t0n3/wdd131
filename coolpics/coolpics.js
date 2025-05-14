// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.querySelector('header button');
//     const menu = document.getElementById('menu');
  
//     menuButton.addEventListener('click', () => {
//       menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
//     });
//   });

let button = document.querySelector("button");
const menu = document.querySelector(".menu");

button.addEventListener('click', toggleMenu)

function toggleMenu() {
    menu.classList.toggle('hide');
}