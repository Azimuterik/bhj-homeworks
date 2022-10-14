const countDead = document.getElementById("dead");
console.log(countDead);
const countLost = document.getElementById("lost");
console.log(countLost);

let showCountDead = 0;
let showCountLost = 0;

getHole = index => document.getElementById(`hole${index}`); //функция для задания id норы в константу
let test = getHole(6);
console.log(test);
for (indexHole = 1; indexHole <= 9; indexHole++)  { //проверяем все норы на нажатие + попадание в нору
    let idHole = getHole(indexHole); // получили id норы

    idHole.onclick = function() {// функция событие

        if (idHole.className !== `hole`) { // если ЕСТЬ попадание
            showCountDead += 1;  // + 1 убитый крот
            countDead.textContent = `${showCountDead}`;
            
        } else {
            showCountLost += 1; // +1 промах
            countLost.textContent = `${showCountLost}`;

            if (showCountLost == 5) {
                alert("Проигрыш");
            } 
    }
    } 
}

