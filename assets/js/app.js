let navButton = document.getElementById('navButton');
let navBlock = document.getElementById('navBlock');
let closeMenuButton = document.getElementById('closeMenu');

navButton.addEventListener('click',showMenu);
closeMenuButton.addEventListener('click',closeMenu)

function showMenu(){
    document.body.style.background ='rgba(0,0,0,0.6)';
    navBlock.style.transform='translateX(0%)';
}

function closeMenu(){
    document.body.style.background ='';
    navBlock.style.transform='translateX(-100%)';
}
