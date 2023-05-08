let dishes;
let ingredientsPrices;
fetch("dishes.json")
.then((r) => r.json())
.then((r) => {
  dishes = r;
  return fetch ("ingredientsPrices.json");
})
.then((r) => r.json())
.then((r) => {
  ingredientsPrices = r;
  

//1.
   let one = '1.Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует `reduce`.'
 console.log(one);  

  dishes.forEach(function(item, index, arr) {
    item.costPrice = item.ingredients.reduce(function (sum, item, index, arr) {
      return sum += ingredientsPrices[item].price;
    }, 0);
  });

  dishes.forEach(function (item, index, arr) {
    console.log(`costPrice ${item.name}: ${item.costPrice}`);
  });
  
  
//2.
   let two = '2.Используйте `map` , чтобы получить массив с объектами в которых содержится только название и стоимость каждого блюда.'
 console.log(two);
  let arrayWithObjects = dishes.map(function(item, index, arr) {
    let variable = {
      name: item.name,
      salePrice: item.salePrice,
    };
    return variable;
  });
  console.log(arrayWithObjects);

//3.
 let free = '3.Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.'
 console.log(free);
let vegansSome = dishes.some(function(item, index, arr) {
  return item.ingredients.every(function(item,index,arr) {
 return ingredientsPrices[item].vegetarian;
});
});
console.log(vegansSome);

//4.
 let four = '4.Определите, полностью ли у вас вегетарианское меню с помощью `every`.'
 console.log(four);
let vegansEvery = dishes.every(function(item, index, arr) {
  return item.ingredients.every(function(item, index,arr) {
    return ingredientsPrices[item].vegetarian;
  });
 });
 console.log(vegansEvery);
 
//5.
  let five = '5.Создайте массив с вегетарианскими блюдами с помощью filter.'
 console.log(five);
 let vegetarianDishes = dishes.filter(function(item, index, arr) {
   return item.ingredients.every(function(item, index, arr) {
    return ingredientsPrices[item].vegetarian;
   });
 });
 console.log(vegetarianDishes);
  
});
