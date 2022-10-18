let tabcontentArr = [...document.getElementsByClassName('tab__content')];
let tabArr = [...document.getElementsByClassName('tab')];




tabArr.forEach(item => {
    

    item.addEventListener('click', function(event) {
        let activeTab = tabArr.findIndex(item1 => item1.className === "tab tab_active")         
        tabArr[activeTab].classList.remove('tab_active');
        tabcontentArr[activeTab].classList.remove('tab__content_active');

        event.currentTarget.classList.toggle('tab_active');
        newActiveTab = tabArr.findIndex(item2 => item2.className === "tab tab_active") 
        tabcontentArr[newActiveTab].classList.toggle('tab__content_active');

    })



})



    



