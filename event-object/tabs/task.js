let tabcontentArr = [...document.getElementsByClassName('tab__content')];
let tabArr = [...document.getElementsByClassName('tab')];




tabArr.forEach(item => {
    console.log(item, item.textContent);

    item.addEventListener('click', function(event) {
        let activeTab = tabArr.findIndex(item1 => item1.className === "tab tab_active") //активный элемент массива
        console.log(activeTab);
        tabArr[activeTab].classList.remove('tab_active');
        tabcontentArr[activeTab].classList.remove('tab__content_active');

        event.currentTarget.classList.toggle('tab_active');
        newActiveTab = tabArr.findIndex(item2 => item2.className === "tab tab_active") // новый активный элемент массива
        tabcontentArr[newActiveTab].classList.toggle('tab__content_active');

    })



})



    



