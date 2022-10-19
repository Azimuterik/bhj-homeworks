const productsList = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

let arr = [...productsList].map((item) => item.getAttribute('data-id'));

getInfoProduct = (item) => {
    const controlsItem = item.querySelector('.product__controls');
    const countBlock = controlsItem.querySelector('.product__quantity-value');
    const imgItem = item.querySelector('.product__image').getAttribute('src');
    const quantity = item.querySelectorAll('.product__quantity-control');
    const dataId = item.getAttribute('data-id');

    quantity.forEach(item => {
        item.addEventListener('click', e => {
            // alert("клик")
            if(e.target.classList.contains('product__quantity-control_dec')) {
                if (countBlock.textContent > 1) {
                    countBlock.innerHTML = countBlock.textContent - 1;
                } 
            } else {
                countBlock.innerHTML = +countBlock.textContent + 1;
            }
        });
    });

    const addBtn = controlsItem.querySelector('.product__add');


    addBtn.addEventListener('click', () => {
        const div = document.createElement('div');

        div.setAttribute('id', dataId);
        div.classList.add('cart__product');

        div.innerHTML = `
            <img class="cart__product-image" src=${imgItem}>
            <div class="cart__product-count">${countBlock.textContent}</div>
        `;

        const idRenderElem = arr.find(item => item === dataId); //надо посмотреть id это или индекс массива
        // alert(idRenderElem)

        



        if(document.getElementById(idRenderElem)) {
            const foundElement = document.getElementById(idRenderElem);
            const prevCount = foundElement.querySelector('.cart__product-count').textContent;
             
            foundElement.querySelector('.cart__product-count').innerHTML = +countBlock.textContent + +prevCount;
           
        } else {
            cart.appendChild(div);
        }
    });
};


 productsList.forEach((el) => {
    getInfoProduct(el);
 })