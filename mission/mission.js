let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark'){
        // give body the dark class
        document.body.classList.add('dark')
        // add different image by changing src
        logo.src = 'images/byui-logo_white.jpg';


    } else {
        // take off class
        document.body.classList.remove("dark");
        // change the image back to original
        logo.src = 'images/byui-logo_blue.jpg';

    }
}