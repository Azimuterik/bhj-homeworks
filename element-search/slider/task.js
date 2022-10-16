let allSliders = document.getElementsByClassName("slider__item"); //массив классов картинок
let allSlidersArrNext = [...allSliders];

let i = 0; //переменная для переключения слйдов в массиве



let BtnNext = document.querySelector("div.slider__arrow_next");
let BtnPrev = document.querySelector("div.slider__arrow_prev");

BtnNext.onclick = function() {
        i += 1
        if (i >= allSlidersArrNext.length) {
            allSlidersArrNext[i - 1].classList.remove("slider__item_active");
            i = 0;
            allSlidersArrNext[i].classList.add("slider__item_active");
        } else {
            allSlidersArrNext[i - 1].classList.remove("slider__item_active");
            allSlidersArrNext[i].classList.add("slider__item_active");

        }

}

BtnPrev.onclick = function() {
    i -= 1
    if (i < 0 ) {
        allSlidersArrNext[i + 1].classList.remove("slider__item_active");
        i = allSlidersArrNext.length - 1;
        allSlidersArrNext[i].classList.add("slider__item_active");
    } else {
        allSlidersArrNext[i + 1].classList.remove("slider__item_active");
        allSlidersArrNext[i].classList.add("slider__item_active");

    }

}