
//1. Напишите функцию принимающую два числа и возвращающую меньшее из них.
let one = '1. Напишите функцию принимающую два числа и возвращающую меньшее из них.'
console.log(one);

function checkNumber(one=1, two=2) {
  if (one < two) {
    return one;
} else {
  return two;
}
};
result = checkNumber(one=1, two=2);
console.log(result);


function number(a=5, b=10) {
  return a < b ? a : b;
};
result = number(a=5, b=10);
console.log(result);


function number(c=50, d=25) {
  return c < d ? c : d;
};
console.log(number(c=50, d=25));


//2. Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.
let one1 = '2. Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.'
console.log(one1);

function profitFromTheSale(salePrice, costPrice) {
  return salePrice - costPrice;
};


let classiсLasagne = {
  name: 'Classic Lasagne',
  ingredients: ['minced meat', 'bechamel sauce', 'lasagne', 'cheese'],
  costPrice: 0, 
  salePrice: 450,
  profit: 0,
};

let caesarSaladWithShrimp = {
  name: 'Caesar Salad With Shrimp',
  ingredients: ['romano salad', 'shrimp', 'cherry tomatoes', 'crackers', 'salad dressing', 'parmesan cheese'],
  costPrice: 0,
  salePrice: 480,
  profit: 0,
};

let eggplantSalad = {
  name: 'Eggplant Salad',
  ingredients: ['fried eggplant', 'tomatoes', 'bulgarian pepper', 'red onion', 'mozzarella', 'parsley', 'dill', 'cilantro', 'corn starch'],
  costPrice: 0,
  salePrice: 300,
  profit: 0,
};

let creamSoupOfChampignons = {
  name: 'Cream Soup Of Champignons',
  ingredients: ['champignons', 'potatoes', 'onion', 'cream'],
  costPrice: 0,
  salePrice: 350,
  profit: 0,
};

let pizzaBarbecue = {
  name: 'Pizza Barbecue',
  ingredients: ['dough', 'barbecue sauce', 'chicken fillet', 'mozzarella', 'parmesan cheese', 'olives', 'red onion', 'tomato sauce'],
  costPrice: 0,
  salePrice: 600,
  profit: 0,
};

let pastaBolognese = {
  name: 'Pasta Bolognese',
  ingredients: ['ground beef', 'spaghetti', 'tomato sauce', 'onion', 'parmesan cheese', 'basil', 'garlic' ],
  costPrice: 0,
  salePrice: 450,
  profit: 0,
};

let grilledBeefWithPotatoesAndEggplant = {
  name: 'Grilled Beef With Potatoes And Eggplant',
  ingredients: ['beef', 'potatoes', 'eggplant'],
  costPrice: 300,
  salePrice: 650,
  profit: 0,
};

let meringueRoll = {
  name: 'Meringue Roll',
  ingredients: ['sugar', 'egg whites', 'pistachios', 'pistachio paste', 'lemon juice', 'corn starch', 'raspberry', 'cream', 'mascarpone'],   
  costPrice: 0,
  salePrice: 300,
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
  dishes[i].costPrice = sum;
};
  
result = ''
for (let i = 0; i < dishes.length; i++) {
  dishes[i].profit = profitFromTheSale (dishes[i].salePrice,  dishes[i].costPrice);
  result +=  `${dishes[i].name}; Profit: ${dishes[i].profit}\n`;
};
console.log(result);