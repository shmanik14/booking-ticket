// First Class plus sign handler
document.getElementById('add-ticket').addEventListener('click', function () {
    plusMinusCommon('ticket-amount', true);
    calculateTotal();
})
// First Class minus sign handler
document.getElementById('delete-ticket').addEventListener('click', function () {
    plusMinusCommon('ticket-amount', false);
    calculateTotal();
})
// Economy Class plus sign handler
document.getElementById('addEconomyTicket').addEventListener('click', function () {
    plusMinusCommon('economy-ticket', true);
    calculateTotal();
})
// Economy Class minus sign handler
document.getElementById('deleteEconomyTicket').addEventListener('click', function () {
    plusMinusCommon('economy-ticket', false);
    calculateTotal();
})

// Ticket plus minus common function
function plusMinusCommon(id, isIncrease) {
    const firstClassTicket = document.getElementById(id).value;
    const ticketNumber = parseFloat(firstClassTicket);
    if (isIncrease == true) {
        const updateTicket = ticketNumber + 1;
        document.getElementById(id).value = updateTicket;
    } else if (isIncrease == false && ticketNumber > 0) {
        const updateTicket = ticketNumber - 1;
        document.getElementById(id).value = updateTicket;
    }
}
// total price function
function calculateTotal() {
    const firstClassTicket = document.getElementById('ticket-amount').value;
    const totalFirstClass = parseFloat(firstClassTicket);

    const economyTicket = document.getElementById('economy-ticket').value;
    const totalEconomyTicket = parseFloat(economyTicket);

    const totalPrice = 150 * totalFirstClass + 100 * totalEconomyTicket;
    document.getElementById('sub-price').innerText = totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('total-price').innerText = grandTotal;
}
// book button handler
document.getElementById('book-btn').addEventListener('click', function () {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('summary').style.display = 'block';

    const firstClassTicket = document.getElementById('ticket-amount').value;
    const totalFirstClass = parseFloat(firstClassTicket);
    document.getElementById('firstQuantity').innerText = totalFirstClass;
    const firstTotal = totalFirstClass * 150;
    document.getElementById('firstTotal').innerText = firstTotal;
    

    const economyTicket = document.getElementById('economy-ticket').value;
    const totalEconomyTicket = parseFloat(economyTicket);
    document.getElementById('economyQuantity').innerText = totalEconomyTicket;
    const economyTotal = totalEconomyTicket * 100;
    document.getElementById('economyTotal').innerText = economyTotal;

    const totalPrice = firstTotal + economyTotal;
    const grandTotal = totalPrice + totalPrice * 0.1;
    document.getElementById('grandTotal').innerText = grandTotal;

})
// Confirm button handler
document.getElementById('confirm').addEventListener('click', function () {
    document.getElementById('summary').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('ticket-amount').value = '0';          
    document.getElementById('economy-ticket').value = '0';
    document.getElementById('sub-price').innerText = '0';          
    document.getElementById('tax').innerText = '0';          
    document.getElementById('total-price').innerText = '0';
})