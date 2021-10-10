// 1.Написать функцию, которая находит сумму чисел от 100 до 200 кратных переданному функции числу
// 2. Написать функцию, которая принимает массив и степень. Функция возвращает массив, в котором каждое число массива возведено в указанную степень.
// 3. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном. Массив, который возвращает функция [1,4,6,74].
// 4. Написать функцию, которая принимает случайный двумерный массив (разной длины) из 8 элементов. Функция возвращает тот массив сумма элементов которого наибольшая.

// 1.
// function calcSum(num) {
//     let sum = 0;
//     for (let i = 100; i < 200; i++ ) {
//         if (i % num === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(calcSum(+prompt(`Введите кратность числа:`)));


// 2.
// function expArr(arr, deg) {
    
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] ** deg;
//     }
//     return arr;
// }
// console.log(expArr([1, 2, 3, 6, 4, 10], 2 ));

// 3.[1,1,1,4,4,5,1,6,6,74,74,74,3]
// let arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];
// let arrNew = [];

// for (let i = 0; i < arr.length; i++) {
//     arrNew = arrNew.concat(getUniqueNumber(arr, arr[i], i));
// }
// console.log(arrNew);

// function getUniqueNumber(arr, num, index) {
//     return arr.includes(num, index + 1) && !arrNew.includes(num) ? num : [];
// }


// 4.
// let arr = [[1, 4, 2, 6, 4, 3, 2, 1, 35, 6, 6], [154, 2, 1, 5, 7, 3], [3, 8, 9, 2, 55, 53, 1, 2], [6, 4, 3, 7, 8, 3, 2, 1,], [5, 3, 2, 1, 6], [505, 0, 1], [6, 4, 3, 2, 1, 2], [7, 8, 9, 10, 52]];

// function getArrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function getBiggestArr(arr2d) {
//     let maxSum = 0;
//     let biggestIndex = 0;
//     for (let i = 0; i < arr2d.length; i++) {
//         let cureentArrSum = getArrSum(arr2d[i]);
//         if (maxSum < cureentArrSum) {
//             maxSum = cureentArrSum;
//             biggestIndex = i;
//         }
//     }
//     return arr2d[biggestIndex];
// }

// console.log(getBiggestArr(arr))