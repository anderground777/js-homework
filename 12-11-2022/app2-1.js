// Вывести в консоль заданную строку N раз с использованием циклов while

function repeatString(str, count) {
    let repStr = '';
    while (count > 0) {
        repStr += str;
        count--;
    }
    return repStr;
}
console.log(repeatString('Заданная строка!', 5));

// Вывести в консоль заданную строку N раз с использованием циклов for

function repeatString(str, count) {
    let repStr = '';
    for (i = 0; i < count; i++) {
        repStr += str;
    }
     return repStr;
}
console.log(repeatString('Заданная строка!', 3));