const book = document.getElementById("book");
const fontSizeArr = [...document.getElementsByClassName("font-size")];

for (let i = 0; i < fontSizeArr.length; i++) {
    fontSizeArr[i].addEventListener("click", (e) => {
        e.preventDefault();
        fontSizeArr.forEach((font) => {

            if (font.classList.contains("font-size_active")) {
                font.classList.toggle("font-size_active");
            }
        });

        fontSizeArr[i].classList.toggle("font-size_active");
        
        if (fontSizeArr[i].dataset.size === "small") {
            book.className = "book book_fs-small";
        } else if (fontSizeArr[i].dataset.size === "big") {
            book.className = "book book_fs-big";
        } else {
            book.className = "book";
        }
    });
}