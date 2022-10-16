//переменная с массивом классов

let menuLink = document.getElementsByClassName("menu__link");
console.log(menuLink);

let menuLinkArr = [...menuLink];
console.log(menuLinkArr);



menuLinkArr.forEach(item => {
      console.log(item.closest("li.menu__item").querySelector("ul.menu_sub"), "внутри цикла");

      item.onclick = function() {
        
            console.log(item.closest("ul.menu_sub"), "мы в отклике"); 

            if (item.closest("li.menu__item").querySelector("ul.menu_sub")) {                        //проверяем есть ли ближайший родительский 
                //если родительсоке меню есть, то отключаем ссылку и открываем дочернее 

                item.closest("li.menu__item").querySelector("ul.menu_sub").classList.add("menu_active");
                  return false;
             } 
       }
             


    });
  
  

