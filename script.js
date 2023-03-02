let foreignPassport = prompt ('Do you have a foreign passport? (answer: yes or no)')

if (foreignPassport == 'yes') {
    alert ('Congratulations! You can go on a trip foreign country!');
} else if (foreignPassport == 'no') {
    alert ('What a pity! But you can\'t go on a trip foreign country:(');
} else {
    alert ('Not found');
}


let onlineSurvey = 'Online survey';
console.log(onlineSurvey);

let question1 = prompt ('Самый просматриваемый видео-хостинг интернета – это …?');
if (question1 == "YouTube") {
    alert ('Это правильный ответ!');
} else if (question1 == 'youtube') {
    alert ('Это правильный ответ!');
} else if (question1 == 'Youtube') {
    alert ('Это правильный ответ!');
} else if (question1 == 'Ютуб') {
    alert ('Это правильный ответ!');
}else if (question1 == 'ютуб') {
    alert ('Это правильный ответ!');
}else {
    alert ('Это неправильный ответ:(');
}

let question2 = prompt ('Какой танец считается самым страстным?');
if (question2 == 'Танго') {
    alert ('Это правильный ответ!');
} else if (question2 =="танго") {
    alert ('Это правильный ответ!');
} else {
    alert ('Это неправильный ответ:(');
}

let question3 = prompt ('Главное орудие хоккеиста – это …');
if (question3 == 'клюшка') {
    alert ('Это правильный ответ!');
} else if (question3 == 'Клюшка') {
    alert ('Это правильный ответ!');
} else {
    alert ('Это неправильный ответ:(');
}

let question4 = prompt ('Назовите главную телебашню России.')
if (question4 == 'Останкино') {
    alert ('Это правильный ответ!');
} else if (question4 == 'останкино') {
    alert ('Это правильный ответ!');
} else {
    alert ('Это неправильный ответ:(');
}

let question5 = prompt('Сколько длилась столетняя война?');
if (question5 = 116) {
    alert ('Это правильный ответ!');
} else {
    alert ('Это неправильный ответ:(');
}

let question6 = prompt ('Согласно известной пословице, в споре рождается …');
if (question6 == 'Истина') {
    alert ('Это правильный ответ!');
} else if (question6 == 'истина') {
    alert ('Это правильный ответ!');
} else {
    alert ('Это неправильный ответ:(');
}

let question7 = prompt ('Какой фрукт является объектом раздора?');
if (question7 == 'Яблоко') {
    alert ('Это правильный ответ!');
} else if (question7 == 'яблоко') {
    alert ('Это правильный ответ!');
} else {
    alert ('Это неправильный ответ:(');
}

let result = prompt ('Сколько правильных ответов у тебя получилось?');
if (result == 7) {
    alert ('Это превосходный результат! Ты молодец!');
} else if (result == 6) {
    alert ('Это хороший результат! Ты молодец!');
} else if (result == 5) {
    alert ('Это неплохой результат! Но есть к чему стремиться!');
} else if (result == 4) {
    alert ('Это нерезультативный результат:( В следующий раз постарайся получше!');
} else if (result == 3) {
    alert ('Это грустный результат:( В следующий раз постарайся получше!');
} else if (result <=2 ) {
    alert (':(:(:(:(:( В следующий раз подготовься получше!');
}else {
    alert ('Not found');
}