// С помощью конструкции switch и переменной, хранящей роль пользователя
// (admin, manager, user …), выводить на экран информацию о пользователе
// (информацию любого типа, роль, дату рождения, любимый напиток и тд). 

const typeOfUser = 'manager'; // user, guest, bot

switch (typeOfUser) {
    case 'admin' :
        console.log('Вы Администратор.');
        break;
    case 'manager' : 
        console.log('Вы Менеджер.');
        break;
    case 'user' :
        console.log('Вы простой пользователь');
        break;
    default: 
        console.log('Тип юзера не определен!');
        break;       
       
}


