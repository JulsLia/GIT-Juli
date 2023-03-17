//1. Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.
let one = 'Task 1. Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.'; 
console.log(one);
for (let i = 2; i<=10; i=i+2) {
  console.log(i);
};

//2. Создайте бесконечный цикл и прервите его на 5ой итерации.
let two = 'Task 2, example 1. Создайте бесконечный цикл и прервите его на 5ой итерации.'; 
console.log(two);
let  i=15; 
 while(true) {
  console.log(i);
  if (i ===19) {
    break;
  }
  i++;
 };

 let free = 'Task 2, example 2. Создайте бесконечный цикл и прервите его на 5ой итерации.'; 
 console.log(free);
 for (let i = 45; i > 10; i++) {
  console.log(i);
  if (i === 49) {
    break;
  }
 };

 //3. Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. (прямо как в уроке номер 8) Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. ⭐Не задавайте цену приготовления сразу. Задайте массив ингредиентов. Отдельно создайте объект хранящий стоимость этих ингредиентов. Посчитайте стоимость приготовления динамически (с помощью цикла)
 
 let five = 'Task 3. Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации..'; 
 console.log(five);
let classiсLasagne = {
  name: 'Classic Lasagne',
  ingredients: ['minced meat', 'bechamel sauce', 'lasagne', 'cheese'],
  'cost price': 0, 
  'sale price': 450,
   profit: 0,
};

let caesarSaladWithShrimp = {
  name: 'Caesar Salad With Shrimp',
  ingredients: ['romano salad', 'shrimp', 'cherry tomatoes', 'crackers', 'salad dressing', 'parmesan cheese'],
  'cost price': 0,
  'sale price': 480,
  profit: 0,
};

let eggplantSalad = {
  name: 'Eggplant Salad',
  ingredients: ['fried eggplant', 'tomatoes', 'bulgarian pepper', 'red onion', 'mozzarella', 'parsley', 'dill', 'cilantro', 'corn starch'],
  'cost price': 0,
  'sale price': 300,
  profit: 0,
};

let creamSoupOfChampignons = {
  name: 'Cream Soup Of Champignons',
  ingredients: ['champignons', 'potatoes', 'onion', 'cream'],
  'cost price': 0,
  'sale price': 350,
  profit: 0,
};

let pizzaBarbecue = {
  name: 'Pizza Barbecue',
  ingredients: ['dough', 'barbecue sauce', 'chicken fillet', 'mozzarella', 'parmesan cheese', 'olives', 'red onion', 'tomato sauce'],
  'cost price': 0,
  'sale price': 600,
  profit: 0,
};

let pastaBolognese = {
  name: 'Pasta Bolognese',
  ingredients: ['ground beef', 'spaghetti', 'tomato sauce', 'onion', 'parmesan cheese', 'basil', 'garlic' ],
  'cost price': 0,
  'sale price': 450,
  profit: 0,
};

let grilledBeefWithPotatoesAndEggplant = {
  name: 'Grilled Beef With Potatoes And Eggplant',
  ingredients: ['beef', 'potatoes', 'eggplant'],
  'cost price': 300,
  'sale price': 650,
  profit: 0,
};

let meringueRoll = {
  name: 'Meringue Roll',
  ingredients: ['sugar', 'egg whites', 'pistachios', 'pistachio paste', 'lemon juice', 'corn starch', 'raspberry', 'cream', 'mascarpone'],   
  'cost price': 0,
  'sale price': 300,
  profit: 0,
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


for (let i = 0; i < dishes.length; i++) {
  let sum = 0;
  for (let j = 0; j < dishes[i].ingredients.length; j++) {
    sum += ingredientsPrices[dishes[i].ingredients[j]];
  }
  dishes[i]['cost price'] = sum;
};



for (let i = 0; i < dishes.length; i++) {
  dishes[i].profit = dishes[i]['sale price'] -  dishes[i]['cost price'];
};


console.log(`Мой массив блюд, с названием, ингредиентами, ценой приготовления, ценой реализации и получившийся прибылью: ${JSON.stringify(dishes)}`); 









