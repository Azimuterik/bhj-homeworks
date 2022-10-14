let counter = document.getElementById("clicker__counter");
let showCounter = 0;
console.log('привет, я вне функции');

counter.textContent = `${showCounter}`;
console.log(`${showCounter}`);


let cookiePic = document.getElementById("cookie");
console.log('cookiePic:');
console.log(cookiePic);


cookiePic.onclick = function() {  //почему не работает онклик? в инструментах разработчика пишет ошибку
    console.log('привет, я внутри функции');
    showCounter += 1;
    counter.textContent = `${showCounter}`;

    if (showCounter % 2 == 1) {
        
        cookiePic.width = 300;

    } else {
        

        cookiePic.width = 200;

    }
}

