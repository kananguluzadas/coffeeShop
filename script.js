let menuItems = document.getElementById('menuItems')
menuItems.style.left = "-100%";


function menuTrigger () {
    if(menuItems.style.left == "-100%"){
        menuItems.style.left = '0%'
    }else{
        menuItems.style.left = "-100%"
    }
}



