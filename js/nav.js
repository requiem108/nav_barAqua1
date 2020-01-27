const nav = document.querySelector('.nav_items');
const navItems = document.querySelectorAll('.nav_items li');
const botonToggle = document.querySelector('.toggleBoton i');

botonToggle.addEventListener('click',MovilMostrarBotones);

for(item of navItems){
    item.addEventListener('click',MostrarContenido);
}


function MostrarContenido(event){
    event.stopPropagation();
    let objt = event.currentTarget;
    let itemSelected= document.querySelector('.itemContenedor');

    //remove class
    itemSelected.classList.remove('itemContenedor');
    itemSelected.classList.add('nav_items_item');


    objt.classList.add('itemContenedor');
    objt.classList.remove('nav_items_item');
    //objt.append(nav);

}

function MovilMostrarBotones(event){
    event.stopPropagation();
    let objt = event.currentTarget;
    let nav = document.querySelector('.nav')

    nav.classList.toggle("navShow");
}