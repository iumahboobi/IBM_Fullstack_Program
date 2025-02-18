


const sales = [{ item: "Laptop", quantity: 2, price: 800 }, { item: "Monitor", quantity: 1, price: 150 }, { item: "Mouse", quantity: 4, price: 25 }]


function calculateTotalSales(sales) {


    let total = 0;
    sales.forEach(sale => {
        total += sale.quantity * sale.price;
    });
    return total;

}

console.log("Total Sales Amount:", calculateTotalSales(sales));

