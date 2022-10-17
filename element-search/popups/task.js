let popup = document.getElementById("modal_main");
popup.classList.add("modal_active");

let popupClose = document.getElementsByClassName('modal__close');
let popupCloseArr =  [...popupClose];

let popupSuccess = document.getElementById("modal_success");
let showPopupSuccess = document.querySelector('.show-success');

 for (let i = 0; i < popupCloseArr.length; i++) {
    popupCloseArr[i].onclick = function () {

        popup.classList.remove('modal_active');
        popupSuccess.classList.remove('modal_active');
    }
};

showPopupSuccess.onclick = function() {

    popup.classList.remove('modal_active');
    popupSuccess.classList.add('modal_active');
}


