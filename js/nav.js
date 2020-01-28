const nav = document.querySelector('.nav_items');
const navItems = document.querySelectorAll('.nav_items li');
const botonToggle = document.querySelector('.toggleBoton i');

//Button menu
botonToggle.addEventListener('click',MovilMostrarBotones);

for(item of navItems){
    item.addEventListener('click',MostrarContenido);
}


window.addEventListener('resize',cierraMenu);



function MostrarContenido(event){
    event.stopPropagation();   
    let objt = event.currentTarget;
    let itemSelected= document.querySelector('.itemContenedor');
    
    //switch class items / intercambia clases de los items 
    itemSelected.classList.remove('itemContenedor');
    itemSelected.classList.add('nav_items_item');

    objt.classList.add('itemContenedor');
    objt.classList.remove('nav_items_item');

   

}

function MovilMostrarBotones(event){
    event.stopPropagation();    
    let nav = document.querySelector('.nav')

    nav.classList.toggle("navShow");

     // switch class of bars to x / cambia clase de las barras a la x
     botonToggle.classList.toggle('fa-times');
}

function cierraMenu(){
    let w = window.innerWidth;
    
    if(w>767){
        let nav = document.querySelector('.nav')        
        botonToggle.classList.remove('fa-times');
        nav.classList.remove("navShow");
    }
}