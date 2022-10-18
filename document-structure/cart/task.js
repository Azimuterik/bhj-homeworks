
const productsListArr = [...document.querySelectorAll('.product')];
const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < productsListArr.length; i++) {
    productAdd(i);
    productRemove(i);
    addToCart(i);
};

function productAdd(i) {
    productsListArr[i].querySelector('.product__quantity-control_inc').addEventListener('click', () => {

        (productsListArr[i].querySelector('.product__quantity-value').innerText) =
        Number(productsListArr[i].querySelector('.product__quantity-value').innerText) + 1;
    });
};

function productRemove(i) {
    productsListArr[i].querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        let value = Number(productsListArr[i].querySelector('.product__quantity-value').innerText);
        
        if (value > 1) {
            productsListArr[i].querySelector('.product__quantity-value').innerText =
                Number(productsListArr[i].querySelector('.product__quantity-value').innerText) - 1;
        };
    });
};

function addToCart(i) {
    productsListArr[i].querySelector('.product__add').addEventListener('click', () => {
        let cartProduct = [...document.querySelectorAll('.cart__product')];
        for (let j = 0; j < cartProduct.length; j++) {

            if (cartProduct[j].dataset.id == productsListArr[i].dataset.id) {
                cartProduct[j].querySelector('.cart__product-count').innerText =
                    parseInt(cartProduct[j].querySelector('.cart__product-count').innerText) +
                    parseInt(productsListArr[i].querySelector('.product__quantity-value').innerText);
                return;
            };
        };

        let productImage = productsListArr[i].querySelector('.product__image');
        let htmlContainer =
            `<div class="cart__product" data-id="${productsListArr[i].dataset.id}">
          <img class="cart__product-image" src="${productImage.src}">
          <div class="cart__product-count">${parseInt(productsListArr[i].querySelector('.product__quantity-value').innerText)}</div>
        </div>`;
        cartProducts.insertAdjacentHTML('beforeEnd', htmlContainer);
    });
};