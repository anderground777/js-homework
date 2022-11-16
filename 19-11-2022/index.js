// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. func1

function func1(a) {
    return a * a;    
}

console.log(func1(6));

//2. Сделайте функцию, которая возвращает сумму двух чисел. func2

function func2(a, b) {
    return a + b;
}
console.log(func2(3, 2));

//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. func3

function func3(a, b, c) {
    return (a - b) / c;
}
console.log(func3(5, 1, 2));

//4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function func4(day){
    if (day === 1) {
        return 'Понедельник';
    } else if (day === 2) {
        return 'Вторник';
    } else if (day === 3) {
        return 'Среда';        
    } else if (day === 4) {
        return 'Четверг';
    } else if (day === 5) {
        return 'Пятница';
    } else if (day === 6) {
        return 'Суббота';        
    } else if (day ===7) {
        return 'Воскресенье';
    } else {
        return 'Ошибка';
    }
}
console.log(func4(5));

//5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function func5(a, b) {
    return a === b;
}
console.log(func5(3, 6));

//6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

function func6(a, b) {
    return (a + b >= 10);
}
console.log(func6(5, 5));

//7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function func7(a) {
    return a < 0;
}
console.log(func7(2));

//8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(a) {
    return a > 0 && a < 10;
}
console.log(isNumberInRange(17));

//10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num) {
    num = String(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]);
    }
    return sum;
}
console.log(getDigitsSum(1919));

//11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

for (let i = 1; i < 2020; i++) {
    if (getDigitsSum(i) == 13) {
        ;
    }
}


//12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(a) {
    return (a % 2) == 0;
} 
console.log(isEven(100));

//15. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function getDigitsSum(num) {
    num = String(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]);
    }
    return sum;
    if (sum > 9) {
        return getDigitsSum;
    }
} 

//16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.


