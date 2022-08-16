const cart = [];


function addToCart(element) {
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const pd = {
        pdName: pdName,
        pdPrice: pdPrice
    }

    cart.push(pd);
}