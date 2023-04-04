//let login = 'admin'; 
//let password = 'root';

//let loginAgain = 'user';
//let passwordAgain = '123';

//let question1 = prompt ('Введите логин');
//let question2 = prompt ('Введите пароль');
//if (question1 == 'admin' && question2 == 'root' || question1 == 'user' && question2 == '123') {
  //alert ('Вы вошли');
//} else if (question1 !== 'admin' && question1 !== 'user') {
  //alert ('Такого пользователя не существует');
//} else if (question2 !== 'root' && question2 !== '123') {
  //alert ('Неправильный пароль');
//};
 
//⭐Для хранения пользователей и паролей используйте объект, где ключом будет имя, а значением пароль.
let registration = {
  'admin': 'root',
  'user' : '123',
};

let question3 = prompt ('Введите логин');
let question4 = prompt ('Введите пароль');
if (question3 == 'admin' && question4 == registration.admin || question3 == 'user' && question4 == registration.user) {
  alert ('Вы вошли');
} else if (question3 !== 'admin' && question3 !== 'user') {
  alert ('Такого пользователя не существует');
} else if (question4 !== registration.admin && question4 !== registration.user) {
  alert ('Неправильный пароль');
}; 

