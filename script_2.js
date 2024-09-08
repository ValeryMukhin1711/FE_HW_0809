
// Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const sum = wishlist.reduce(
    (acc, item_1) => {

    return (acc + (item_1.price))
}, 0)
console.log(sum);

// forEach

let value = 0;

wishlist.forEach(element => {
    return (value + element.price);
});

console.log(sum);
