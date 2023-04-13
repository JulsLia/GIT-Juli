import { loginPassword } from './scriptExport.js'
let registration = {
    'admin': 'root',
    'user' : '123',
  };
  
  let question3 = prompt ('Введите логин');
  let question4 = prompt ('Введите пароль');

 

  let result = loginPassword (question3, question4, registration);
  alert (result);
