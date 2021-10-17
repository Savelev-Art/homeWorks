
// 10  10    6   7 
// 15 15   11  12
// 10 10   16  16

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// };

// let p1 = new Point(prompt(`введите x первой точки линии 1`), prompt(`введите y первой точки линии 1`));
// let p2 = new Point(prompt(`введите x второй точки линии 1`), prompt(`введите y второй точки линии 1`));
// let p3 = new Point(prompt(`введите x первой точки линии 2`), prompt(`введите y первой точки линии2`));
// let p4 = new Point(prompt(`введите x второй точки линии 2`), prompt(`введите y второй точки линии2`));
// let p5 = new Point(prompt(`введите x первой точки линии 3`), prompt(`введите y первой точки линии 3`));
// let p6 = new Point(prompt(`введите x второй точки линии 3`), prompt(`введите y второй точки линии 3`));

// class Line {
//     constructor(point1, point2) {
//         this.point1 = point1;
//         this.point2 = point2;
//     }
// };

// let l1 = new Line(p1, p2);
// let l2 = new Line(p3, p4);
// let l3 = new Line(p5, p6);

// function getLength(lines) {
//     let a = lines.point1.x - lines.point2.x
//     let b = lines.point1.y - lines.point2.y
//     let c = Math.sqrt(a ** 2 + b ** 2);
//     return c;
// }

// function canTriangleExist(line1, line2, line3) {
//     line1 + line2 > line3 && line2 + line3 > line1 && line3 + line1 > line2 ? console.log(`Треугольник может существовать!`) : console.log(`Треугольник существовать не может!`);
// }

// canTriangleExist(getLength(l1), getLength(l2), getLength(l3));


// console.log(p1, p2, p3, p4, p5, p6);
// console.log(l1, l2, l3);




// 1.	Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом code (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса.

// 2.	Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

// 3. Создать массив из 10 случайных инстансов Programmer, и отфильтровать его с помощью метода filter так, чтобы в результирующий массив попали только те Programmer, у которы длина массива stack больше 4.

class Programmer {
    constructor(name, arr) {
        this.name = name;
        this.stack = arr;
    }
    code () {
        this.stack.forEach((item) => {
            console.log(`${this.name} is coding on ${item}`);
        }           
        )
    }
    toString () {
        console.log(`Hello my name is ${this.name}`); 
    }
}

const proger1 = new Programmer(`Oleg`, [`Python`, `PHP`, `Java`]);
const proger2 = new Programmer(`Viktor`, [`PHP`]);
const proger3 = new Programmer(`Nikodim`, [`Python`, `PHP`, `Java`, `C`]);
const proger4 = new Programmer(`Sasha`, [`Python`, `PHP`, `Basic`, `Pascal`, `REXX`, `Occam`]);
const proger5 = new Programmer(`Mitya`, [`Python`, `PHP`, `Java`, `C`, `C++`, `C#`]);
const proger6 = new Programmer(`Katya`, [`Python`, `PHP`, `Java`, `NodeJs`]);
const proger7 = new Programmer(`Nastya`, [`Python`, `PHP`, `Java`]);
const proger8 = new Programmer(`John`, [`Python`, `PHP`, `Java`]);
const proger9 = new Programmer(`Alex`, [`Python`, `PHP`, `Java`, `Go`, `Swift`]);
const proger10 = new Programmer(`Timur`, [`PHP`, `Java`]);

// proger1.__proto__.__proto__.toString = function () { // изменили нативный toString оч плохо)не стоит так делать)
//     console.log(`Hello my name is ${this.name}`);
// };

const arrObjProger = [proger1, proger2, proger3, proger4, proger5, proger6, proger7, proger8, proger9, proger10];

const resultArrObjProger = arrObjProger.filter(item => item.stack.length > 4);

console.log(resultArrObjProger);
proger1.code();
proger1.toString();



