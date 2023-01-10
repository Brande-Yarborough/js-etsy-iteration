(function() {
    'use strict'
//1.

const prices = items.map(function (item) { //map method returns new array with price
    return item.price;
});
console.log(prices);

function getAvg(prices) {
    const total = prices.reduce(function(acc, i) {
        return acc + i;
    });
    return total/items.length;
}
const totalAvg = getAvg(prices);
console.log(`The average price is $${totalAvg.toFixed(2)}`); //use to fixed method to round decimal 2 places

/*const sum = items.reduce(function(acc, i) {
    return acc + i;
});*/

//2.







})();