// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false

// const obj = {};

// function isEmptyObj(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
// console.log(isEmptyObj(obj))

////////////////////////////////

// 2. Создайте объект pupyrki (пупырки). Внутри объекта должны
// быть поля blue: 120, red: 250, orange: 23, purple: 231.
// Напишите программу, которая выведет на экран сумму всех
// пупырок (при подсчете, данные обязательно брать из
// объекта).

// const pupyrki = {
//     blue: 120,
//     red: 250,
//     orange: 23,
//     purple: 231
// };

// function sumPup() {
//     let sum = 0;
//     for (let key in pupyrki) {
//         sum += pupyrki[key];
//     }
//     return sum;
// }

// console.log(sumPup());

/////////////////////////////////

// 3. Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения).

// const shtuchki = {
//     shtuchka1: 200,
//     shtuchka2: 521,
//     shtuchka3: 113,
//     shtuchka4: 314,
//     shtuchka5: 871
// };

// function getMaxNum(obj) {
//     let maxNum = 0;
//     for (let key in obj) {
//         if (obj[key] > maxNum) {
//             maxNum = obj[key];
//         }
//     }
//     return maxNum;
// }

// console.log(getMaxNum(shtuchki));

//////////////////////////////

// 4. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).

// const student = {
//     math: 5,
//     biology: 3,
//     language: 2,
//     isOboltus: `yes`
// };


// function increaseNumObj (obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === `number`) {
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// }

// console.log(increaseNumObj(student));











