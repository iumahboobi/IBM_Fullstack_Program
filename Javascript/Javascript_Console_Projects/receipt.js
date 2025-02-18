
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];



function generateReceipt (orders) {

let eachItemTotal = 0;
let grandTotal = 0;
let receipt ="";

for(const order of orders) {

    eachItemTotal = order.quantity * order.price;
    grandTotal+=eachItemTotal;

    console.log(`Item: ${order.item}, Quantity: ${order.quantity}, Price: $${order.price}, Total: $${eachItemTotal}`);

}

receipt += `Grand Total :` + grandTotal;

console.log(receipt);
}

generateReceipt(orders);