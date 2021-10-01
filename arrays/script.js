// 1. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1.1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 1.2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 1.3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 1.4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 1.5. Отсортируйте получившийся массив по алфавиту ??????????????????

// 1.1
// let userData = prompt(`Введите имя:`);

// if (people1.includes(userData)) {
//     people2.push(userData);
// } else {
//     console.log(`Введеное имя не найдено!`)
// }
// console.log(people1, people2);

// 1.2
// let userName = prompt(`Введите имя`);
// if (people2.includes(userName)) {
//     people2.splice(people2.indexOf(userName), 1);
// }
// console.log(people2);

// 1.3
// let arrNew = [];

// for (let i = 0; i < people1.length; i++) {
//     for (let n = 0; n < people2.length; n++) {
//         if (people1[i] === people2[n]) {
//             arrNew.push(people1[i]);
//         }
//     }
// }
// console.log(arrNew);

// 1.4, 1.5 
// let arrNew = [];
// for (let i = 0; i < people1.length; i++) {
//     for (let n = 0; n < people2.length; n++) {
//         if (people1[i] === people2[n]) {
//             people2.splice(people2.indexOf(people2[n]), 1);
//         }
//     }
// }

// arrNew = people1.concat(people2);
// console.log(arrNew);

// let arrLast = [];
// let minName;
// let indexName;
// for (let a = 0; a < arrNew.length;) {
//     minName = arrNew[0];
//     for (let i = 0; i < arrNew.length; i++) {
//         if (minName > arrNew[i]) {
//             minName = arrNew[i];
//             indexName = i;
//         } else if (minName === arrNew[i]) {
//             indexName = 0;
//         }
//     }
//     arrLast.push(minName);
//     arrNew.splice(indexName, 1);
// }
// console.log(arrLast);



////////////////////////////////////////////
// 2. 2.1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arrNew = [];
// arrNew = arr.splice(2, 3);

// console.log(arr);
// console.log(arrNew);

// 2.2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arrNew = [];
// arrNew = arr.splice(5, 2);
// arrNew.reverse();
// for (let i = 0; i < arrNew.length; i++) {
//     arr.unshift(arrNew[i]);
// }
// console.log(arr);

// 2.3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === `Eddie`) {
//         arr[i] = `Oleg`;
//     }
//     if (arr[i] === `Janett`) {
//         arr[i] = `Valerchik`;
//     }
// }
// console.log(arr);

// 2.4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// console.log(arr);
// arr.reverse();
// for (let i = 0; i < 4; i++) {
//     arr[i] = `Mitrofan`
// }
// console.log(arr);


// 2.5. Даны два массива 
// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let people2 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];

// // взять из второго массива все имена начина с "Aristarkh" (включительно)
// // и добавить их в 1ый массив (не должно получится двумерного массива)

// let arrNew = [];
// let userName = `Aristarkh`
// let amountElem = 0;
// amountElem = people2.length - people2.indexOf(userName);
// arrNew = people2.splice(people2.indexOf(userName), amountElem);
// for (let i = 0; i < arrNew.length; i++) {
//     people1.push(arrNew[i]);
// }
// console.log(people1);


//////////////////////////////////////////////
//3. Создайте массив из 10 чисел. Найдите и выведите на экран наименьший четный элемент массива.

// let arrNumber = [32, 6, 39, 42, 54, 104, 33, -2, 67, 3, 10, 18, -13, -53];
// let minNumber = arrNumber[0];

// for (let i = 1; i < arrNumber.length; i++) {
//     if (arrNumber[i] % 2 === 0) {
//         if (arrNumber[i] < minNumber) {
//             minNumber = arrNumber[i];
//         }     
//     }
// }
// console.log(minNumber);
///////////////////////////////////////////////
// 4.  Создать массив из 10 чисел. Среди элементов с нечетными номерами найдите наибольший элемент массива, который делится на 3
// let arrNumber = [32, 6, 39, 42, 54, 103, 33, -2, 67, 3, 10, 18, -13, -53];
// let maxNumber = null;

// for (let i = 0; i < arrNumber.length; i++) {
//     if (arrNumber.indexOf(arrNumber[i]) % 2 !== 0) {
//         if (arrNumber[i] % 3 === 0) {
//             if (arrNumber[i] > maxNumber) {
//                 maxNumber = arrNumber[i];
//             }
//         }
//     }
// }
// console.log(maxNumber);
/////////////////////////////////////////////
// 5. Создайте массив из 10 чисел. Найдите три последовательных элемента в массиве, сумма которых максимальна
// let arrNumber = [32, 6, 39, 42, 54, 103, 33, -2, 67, 3, 10, 180, 13, 53];
// let summNumber = 0;
// let maxSumNumber = [];

// for (let i = 0; i < arrNumber.length; i++) {
//     if (arrNumber[i] + arrNumber[i + 1] + arrNumber[i + 2] > summNumber) {
//         summNumber = arrNumber[i] + arrNumber[i + 1] + arrNumber[i + 2];
//         maxSumNumber = [arrNumber[i] , arrNumber[i + 1] , arrNumber[i + 2]]
//     }
// }
// console.log(maxSumNumber);