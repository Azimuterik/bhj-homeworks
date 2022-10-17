
let itemsArr = [...document.getElementsByClassName('dropdown__item')]; //список меню
let value = document.querySelector(".dropdown__value"); //поле куда ставится текстконтекст из выбранного
let list = document.querySelector('.dropdown__list');
let links = [...document.getElementsByClassName('dropdown__links')];


value.addEventListener('click', function() {
    if (list.className == 'dropdown__list dropdown__list_active')  {             //если открыто закрыть, если закрыто открыть
        list.className = 'dropdown__list';
    } else {
        list.className = 'dropdown__list dropdown__list_active';
    }
})


itemsArr.forEach(lang => {
    lang.onclick = function() {
        
        

        
        value.textContent = `${lang.querySelector('.dropdown__link').textContent}`;
        list.className = 'dropdown__list';
        return false;
    }
})


