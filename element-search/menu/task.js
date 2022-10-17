
let menuLink = document.getElementsByClassName("menu__link");
let menuLinkArr = [...menuLink];

menuLinkArr.forEach(item => {
      
      item.onclick = function() {
        
            if (item.closest("li.menu__item").querySelector("ul.menu_sub")) {                        
                  item.closest("li.menu__item").querySelector("ul.menu_sub").classList.toggle("menu_active");
                  return false;
            } 
      }
             


});
  
  

