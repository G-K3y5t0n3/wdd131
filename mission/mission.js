let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark'){
        // give body the dark class
        document.body.classList.add('dark');
        document.querySelector('.subtitle').classList.add('dark-subtitle');
        // add different image by changing src
        logo.src = 'images/byui-logo_white.jpg';
    }

    else {
        // take off class
        document.body.classList.remove("dark");
        document.querySelector('.subtitle').classList.remove('dark-subtitle');
        // change the image back to original
        logo.src = 'images/byui-logo_blue.jpg';
    }
    
}