//1. 
// Дан массив объектов:

const persons = [
    {
        name: 'One',
        age: 1,
    },
    {
        name: 'Two',
        age: 2
    },
    {
        name: 'Three',
        age: 3
    },
    {
        name: 'Four',
        age: 4
    }
]

// Каждому объекту из этого массива необходимо добавить метод .sayHello()
// который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждго объекта

function outMess() {
    console.log(`Hello! My name is ${this.name}`);
}

function addMetod (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].sayHello = outMess;
        arr[i].sayHello();
    }
    return arr;
}

console.log(addMetod(persons));

////////////////////////////////

// 2. используя setTimeout и цикл, вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду 

for (let i = 0; i < persons.length; i++) {
    const callFunc = persons[i].sayHello.bind(persons[i]);
    setTimeout(
        callFunc,
        1000 * i
    );
}

/////////////////////////////////

// 3. используя объект const creature = { name: 'Ctulhu', eyes: 8 }, заставьте creature воспользоваться
// методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

const creature = {
    name: 'Ctulhu',
    eyes: 8
}

persons[0].sayHello.call(creature);

////////////////////////////////

// 4. напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива)
// эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
// после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива)
// пример:

// presentation(persons[0].sayHello) 
// =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is One"

// presentation(persons[1].sayHello) 
// =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is Two"

function presentation (func) {
    console.log(`Ladies and Gentlemen, here is our person:`);
    func();
}

for (let i = 0; i < persons.length; i++) {
    presentation(persons[i].sayHello.bind(persons[i]));
}
