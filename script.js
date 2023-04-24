let classiсLasagne = {
    name: 'Classic Lasagne',
    ingredients: ['minced meat', 'bechamel sauce', 'lasagne', 'cheese'],
    costPrice: 0,
    salePrice: 450,
    profit: 0,
    vegetarianMeal: false,
  };
  
  let caesarSaladWithShrimp = {
    name: 'Caesar Salad With Shrimp',
    ingredients: ['romano salad', 'shrimp', 'cherry tomatoes', 'crackers', 'salad dressing', 'parmesan cheese'],
    costPrice: 0,
    salePrice: 480,
    profit: 0,
    vegetarianMeal: false,
  };
  
  let eggplantSalad = {
    name: 'Eggplant Salad',
    ingredients: ['fried eggplant', 'tomatoes', 'bulgarian pepper', 'red onion', 'mozzarella', 'parsley', 'dill', 'cilantro', 'corn starch'],
    costPrice: 0,
    salePrice: 300,
    profit: 0,
    vegetarianMeal: true,
  };
  
  let creamSoupOfChampignons = {
    name: 'Cream Soup Of Champignons',
    ingredients: ['champignons', 'potatoes', 'onion', 'cream'],
    costPrice: 0,
    salePrice: 350,
    profit: 0,
    vegetarianMeal: true,
  };
  
  let pizzaBarbecue = {
    name: 'Pizza Barbecue',
    ingredients: ['dough', 'barbecue sauce', 'chicken fillet', 'mozzarella', 'parmesan cheese', 'olives', 'red onion', 'tomato sauce'],
    costPrice: 0,
    salePrice: 600,
    profit: 0,
    vegetarianMeal: false,
  };
  
  let pastaBolognese = {
    name: 'Pasta Bolognese',
    ingredients: ['ground beef', 'spaghetti', 'tomato sauce', 'onion', 'parmesan cheese', 'basil', 'garlic'],
    costPrice: 0,
    salePrice: 450,
    profit: 0,
    vegetarianMeal: false,
  };
  
  let grilledBeefWithPotatoesAndEggplant = {
    name: 'Grilled Beef With Potatoes And Eggplant',
    ingredients: ['beef', 'potatoes', 'eggplant'],
    costPrice: 300,
    salePrice: 650,
    profit: 0,
    vegetarianMeal: false,
  };
  
  let meringueRoll = {
    name: 'Meringue Roll',
    ingredients: ['sugar', 'egg whites', 'pistachios', 'pistachio paste', 'lemon juice', 'corn starch', 'raspberry', 'cream', 'mascarpone'],
    costPrice: 0,
    salePrice: 300,
    profit: 0,
    vegetarianMeal: true,
  };
  
  
  let ingredientsPrices = {
    'minced meat': 60,
    'bechamel sauce': 50,
    'lasagne': 50,
    'cheese': 40,
    'romano salad': 30,
    'shrimp': 50,
    'cherry tomatoes': 40,
    'crackers': 30,
    'salad dressing': 30,
    'parmesan cheese': 40,
    'fried eggplant': 20,
    'tomatoes': 20,
    'bulgarian pepper': 20,
    'red onion': 7,
    'mozzarella': 20,
    'parsley': 4,
    'dill': 4,
    'cilantro': 3,
    'corn starch': 2,
    'champignons': 105,
    'potatoes': 10,
    'onion': 5,
    'cream': 30,
    'dough': 15,
    'barbecue sauce': 30,
    'chicken fillet': 30,
    'olives': 20,
    'tomato sauce': 8,
    'ground beef': 70,
    'spaghetti': 50,
    'basil': 2,
    'garlic': 5,
    'beef': 200,
    'eggplant': 90,
    'sugar': 5,
    'egg whites': 10,
    'pistachios': 5,
    'pistachio paste': 5,
    'lemon juice': 2,
    'corn starch': 2,
    'raspberry': 21,
    'mascarpone': 20
  };
  
  let dishes = [
    classiсLasagne,
    caesarSaladWithShrimp,
    eggplantSalad,
    creamSoupOfChampignons,
    pizzaBarbecue,
    pastaBolognese,
    grilledBeefWithPotatoesAndEggplant,
    meringueRoll
  ];
  
  
  //1.
  let one = '1.Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует `reduce`.'
console.log(one);
  for (let i = 0; i < dishes.length; i++) {
    let costPrice = dishes[i].ingredients.reduce(function (sum, item, index, arr) {
      return sum += ingredientsPrices[item];
    }, 0);
    console.log(costPrice);
  };
  
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
 return item.vegetarianMeal;
});
console.log(vegansSome);

//4.
let four = '4.Определите, полностью ли у вас вегетарианское меню с помощью `every`.'
console.log(four);
let vegansEvery = dishes.every(function(item, index, arr) {
  return item.vegetarianMeal;
 });
 console.log(vegansEvery);
 
 //5.
 let five = '5.Создайте массив с вегетарианскими блюдами с помощью filter.'
console.log(five);
let vegetarianDishes = dishes.filter(function(item, index, arr) {
  return item.vegetarianMeal;
});
console.log(vegetarianDishes);