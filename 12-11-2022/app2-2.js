// Ежедневно количество доступных автомобилей в салоне уменьшается в два
// раза. Выяснить, на какой день продаж, количество доступных к покупке авто
// станет меньше M, если известно, что в первый день продаж всего было N 
// автомобилей.
// делал дома
// let N = 300;
// let M = 50;
// count = 1;

// while(N > M) {
//     N = N/2;
//     count++;
// }
// console.log(count);

// разбор в классе через while
const startCarCount = 1000;
const minCarCount = 10;
let day = 1;
let currentCarCount = startCarCount;

while (currentCarCount > minCarCount) {
    currentCarCount = Math.round(currentCarCount / 2);
    day++;
}
console.log(`Через ${day} дней.`)

// //через for
// const startCarCount = 1000;
// const minCarCount = 10;
// let dayCarMinCount = null;
// let currentCarCount = startCarCount;
// for (let day = 1; minCarCount < currentCarCount; index++) {
//     currentCarCount = currentCarCount / 2;
//     dayCarMinCount = day;
// }
// console.log(`Через ${day} дней.`)
