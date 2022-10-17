let allSliders = document.getElementsByClassName("slider__item"); 
let allSlidersArr = [...allSliders];
console.log(allSlidersArr);

let slide = 0; 


let BtnNext = document.querySelector("div.slider__arrow_next");

let BtnPrev = document.querySelector("div.slider__arrow_prev");

BtnNext.onclick = function() {
        slide += 1;
        changeSlide(slide);

}

BtnPrev.onclick = function() {
    slide -= 1
    changeSlide(slide);

}

function changeSlide(s) {
    let activeIndex = allSlidersArr.findIndex(item => item.className === "slider__item slider__item_active");
    allSlidersArr[activeIndex].classList.remove('slider__item_active');

s > allSlidersArr.length - 1 ? (
        slide = 0 
    ) : s < 0 ? (
        slide = allSlidersArr.length - 1
    )  : slide = s
  
allSlidersArr[slide].classList.add('slider__item_active');
  
}