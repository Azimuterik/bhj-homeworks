let popup = document.getElementById("modal_main");
console.log(popup);


popup.classList.add("modal_active");

let popupClose = document.getElementsByClassName('modal__close');
console.log(popupClose)
 let popupCloseArr =  [...popupClose];
 console.log(popupCloseArr);

 let popupSuccess = document.getElementById("modal_success");
 let showPopupSuccess = document.querySelector('.show-success');

 for (i = 0; i < popupCloseArr.length; i++) {
    popupCloseArr[i].onclick = function () {
        popup.classList.remove('modal_active');
        popupSuccess.classList.remove('modal_active');

    }
 };



