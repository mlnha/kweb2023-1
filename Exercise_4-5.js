//step1
const itemPrice = {
    milk: 2000,
    egg: 3000,
    orange: 2500,
    bread: 3500,
};

let totalPrice = 0;

//step2
for (const buttonEl of document.getElementsByClassName('add-to-cart')) {
    buttonEl.addEventListener('click', event => {

        //step3
        const itemName = event.target.parentNode.parentNode.getAttribute('id');
        totalPrice += itemPrice[itemName];
        document.getElementById('cost').innerText = totalPrice;
});
}