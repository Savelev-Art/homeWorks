// 1.  Написать программу, которая выводит название дня недели по его номеру
// Если пользователь вводит некорректный день, вывести в консоль сообщение «Incorrect day»
// В этом задании нужно обязательно использовать switch

// const numberDay = +prompt(`Enter the number of the day of the week`);

// switch (numberDay) {
//     case 1:
//         console.log(`Monday`);
//         break;
//     case 2:
//         console.log(`Tuesday`);
//         break;
//     case 3:
//         console.log(`Wednesday `);
//         break;
//     case 4:
//         console.log(`Thursday `);
//         break;
//     case 5:
//         console.log(`Friday `);
//         break;
//     case 6:
//         console.log(`Saturday `);
//         break;
//     case 7:
//         console.log(`Sunday `);
//         break;
//     default:
//         console.log(`There is no such day of the week`);
// }

///////////////////////////////////////////////////////////////////
// 2. Написать игру «камень, ножницы, бумага»
// Первый игрок вводит слово «rock»//"stone",  «scissors» или «paper»
// После этого второй игрок делает то же самое
// Вывести в консоль кто победил: игрок1 или игрок2 согласно правилам игры

const plOne = prompt(`Player One enter: stone, scissors or paper`);
const plTwo = prompt(`Player Two enter: stone, scissors or paper`);

if (plOne === `stone` && plTwo === `scissors`
    || plOne === `scissors` && plTwo === `paper`
    || plOne === `paper` && plTwo === `stone`) {
    console.log(`player One winner!`);
} else if (plOne === plTwo) {
    console.log(`DRAW!`);
} else {
    console.log(`player Two winner!`);
}




///////////////////////////////////////////////////////////////////
// 3. Переписать в тернарный оператор следующий код:
// const age = +prompt(`enter your age`);
// if (age < 10) {
// 	console.log(`hi!`);
// } else if (age <  20) {
// 	console.log(`hello!`);
// } else if (age < 50) {
// 	console.log(`good day`);
// } else {
// 	console.log(`ALOHA!`);
// }

// const age = +prompt(`enter yuor age`);

// console.log(
//     age < 10
//         ? `Hi!`
//         : age < 20
//             ? `hello!`
//             :  age < 50
//                 ? `good day!`
//                 : `ALOHA!`            
// )


