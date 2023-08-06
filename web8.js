function calculateTotal() {
    const pineapplePrice = 12.5;
    const quantity = parseInt(document.getElementById('quantity').value);
    const delivery = document.getElementById('delivery').checked;
    const tip = parseInt(document.getElementById('tip').value);

    let discount = 0;
    if (quantity >= 1 && quantity <= 10) {
        discount = 0.1;
    } else if (quantity >= 11 && quantity <= 20) {
        discount = 0.15;
    } else if (quantity > 20) {
        discount = 0.2;
    }

    const subtotal = pineapplePrice * quantity;
    const totalDiscount = subtotal * discount;
    const discountedTotal = subtotal - totalDiscount;

    let deliveryCharge = 0;
    if (delivery) {
        deliveryCharge = 50;
    }

    const tipAmount = tip;
    const taxRate = 0.2;
    const taxAmount = discountedTotal * taxRate;

    const finalTotal = discountedTotal + deliveryCharge + tipAmount + taxAmount;

    const resultMessage = `
      
       
        Final Total: ${finalTotal} BDT
    `;

    document.getElementById('total').innerHTML = resultMessage;
}
 