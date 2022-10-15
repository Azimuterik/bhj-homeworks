//переменная с массивом классов
let menuSub = document.getElementsByClassName("menu menu_sub");
console.log(menuSub);

let menuLink = document.getElementsByClassName("menu__link");
console.log(menuLink);

let menuLinkArr = [...menuLink];
console.log(menuLinkArr);


for (i = 0; i < menuLinkArr.length; i++) {
    console.log(menuLinkArr[i].closest("ul.menu_sub")); //проверяем есть ли ближайший родительский 
    console.log(menuLinkArr[i].closest("li.menu__item").querySelector("ul.menu_sub"))
    menuLinkArr[i].onclick = function() {
        if (menuLinkArr[i].closest("ul.menu_sub") == true) { 
   //если родительсоке меню есть, то отключаем ссылку и открываем дочернее меню
            return menuSub.classList.add("menu_active");
        } return
    }
    

    }




// const links = [...document.getElementsByClassName("menu__link")];

// links.forEach(el => {
//     el.onclick = () => {
//         const activeItem = document.querySelector(".menu_active");
//         if (el.closest("li.menu__item").querySelector("ul.menu_sub")) {
//             el.closest("li.menu__item").querySelector("ul.menu_sub").classList.toggle("menu_active");
//             if (activeItem) {
//                 activeItem.classList.remove("menu_active");
//             }
//             return false;
//         }
//     }
// });