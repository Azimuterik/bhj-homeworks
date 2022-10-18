const rotatorCaseArr = [...document.querySelectorAll('.rotator__case')];

const createRotator = (rotatorItems) => {
    let index = 0;


    setInterval(() => { 
        let activeIndex = rotatorItems.findIndex(item => item.className === "rotator__case rotator__case_active");
        rotatorItems[activeIndex].classList.remove('rotator__case_active');

        if (index >= rotatorItems.length - 1) {
            index = 0;
            rotatorItems[index].classList.add('rotator__case_active');

        } else {
            index += 1;
            rotatorItems[index].classList.add('rotator__case_active');
        }

       
        rotatorItems[index].style.color = rotatorItems[index].dataset.color;


    }, 1000)
}

const rotator = createRotator(rotatorCaseArr);