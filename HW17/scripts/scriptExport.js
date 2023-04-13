  export function loginPassword (question3, question4, registration){
  if (question3 == 'admin' && question4 == registration.admin || question3 == 'user' && question4 == registration.user) {
    return ('Вы вошли');
  } else if (question3 !== 'admin' && question3 !== 'user') {
    return ('Такого пользователя не существует');
  } else if (question4 !== registration.admin && question4 !== registration.user) {
    return ('Неправильный пароль');
  };
  }; 