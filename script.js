    let cartCount = 0;
    const cartCountDisplay = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountDisplay.textContent = cartCount;
        });
    });