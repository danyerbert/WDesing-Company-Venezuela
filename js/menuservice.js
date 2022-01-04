const menu_icons = document.querySelector(".menu");
const menu = document.querySelector(".menu-navegacion");


//console.log(menu)
//console.log(menu_icons)


menu_icons.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
      && e.target != menu && e.target != menu_icons){
        menu.classList.toggle("spread")
      }    
})   