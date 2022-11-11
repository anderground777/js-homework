/*Реализовать систему рекомендаций для пользователя опираясь на значение
переменной, хранящей значение температуры в градусах Цельсия*/
let temp = -1000;
if (temp <= -30) {  
    console.log ('Оставайтесь дома!')
} else if (temp >= -30 && temp <= -10) {
    console.log ('Сегодня холодно')
} else if (temp >= -10 && temp <= 5) {
    console.log ('Не холодно')
} else if (temp >= 5 && temp <= 15) {
    console.log ('Тепло')
} else if (temp >= 15 && temp <= 25) {
    console.log ('Норм')
} else if (temp >= 25 && temp <= 35) {
    console.log ('Жарень')
} else if (temp > 35) {
    console.log ('Ахтунг, опасность ожогов!')
} else {
    console.log ('404 Термометр не найден!')
};
