(function() {
    'use strict'
//1.

const currency = items.filter(function(item) {
    return item.currency_code === 'USD';
});

const prices = currency.map(function (item) { //map method returns new array with price
    return item.price;
});
console.log(prices);

function getAvg(prices) {
    const total = prices.reduce(function(acc, i) { //reduce calls against array and reduces array to single value 
        return acc + i;
    });
    return total/currency.length; //taking total single value of sum from array and dividing by items length to get avg
}
const totalAvg = getAvg(prices);
console.log(`The average price is $${totalAvg.toFixed(2)}`); //use to fixed method to round decimal 2 places

/*const sum = items.reduce(function(acc, i) {
    return acc + i;
});*/

//2.

const inRange = items.filter(function(item){ //use filter method to return items that meet condition
    return item.price >= 14.00 && item.price <= 18.00;
});

console.log("Items that cost between $14.00 USD and $18.00 USD:", inRange);

//3. 

const gbp = items.filter(function(item) {
    return item.currency_code === "GBP"; //returns array 

});

gbp.forEach(function(item) { //in order to access items in array, you have to use array method

    console.log(`${item.title}, costs £${item.price}`);
});

//4. 

const wood = items.filter(function(item) {
return item.materials.includes("wood");
});

wood.forEach(function(item) {
    console.log(`${item.title} is made of wood.`);
});

//5. 
 const materials = items.filter(function(item) {
    return item.materials.length > 8;
 });
 materials.forEach(function(item) {
    console.log(`${item.title} has ${item.materials.length}. ${item.materials}`);
 });

 //6. 
 const sellers = items.filter(function(item) {
    return item.who_made === "i_did";
 });
 console.log(`${sellers.length} were made by their sellers`);







})();