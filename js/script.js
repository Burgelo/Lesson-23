"use strict"

/*let someString = "Ciao!";
console.log(someString[0]);
console.log(typeof someString);

поиск 
let someString = "Привіт! Як справи?";
let someStringLower = someString.toLowerCase();
console.log(someStringLower);
console.log(someStringLower.includes('р'));
Получение части ряда, кода
let someString = "Привіт! Як справи?"
let someNewString = someString.slice(0, 6);
console.log(someNewString);
let varOne = 5;
let varTwo = 10;
if (varOne > varTwo){
	let result = varOne + varTwo;
   console.log(result);
} else {
	console.log("else");
}
//нет вывода в консоль, если > и выполняется при <
//продолжение кода...


//практика
let varOne = 10;
let varTwo = 10;
if (varOne >= 1){//чи varOne верне true
	//код виконується
	//тільки якщо умова вертає true
	console.log("varOne is true");
}

//цикл
let someString = "Привіт!";
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);*/

/*console.log(`Кількість символів: ${someString.length}`);
for (let i = 0; i < someString.length; ++i){
	console.log (someString[i]);
}*/


//Операторы JAVASCRIPT. "2"+2=22. Уроки JAVASCRIPT
//Домашнє завдання 
//Вариат №1 
console.log('35' + -'22');
console.log(typeof '35' + -'22'); // string-22
//Вернет 13
//не вірно. Запис 35 - 22.
//35 - залишаеться як string (строка),
// а '22' вертає число.  
//Вариат №2
console.log('35' * '22');
//Вернет 770
//Вірно. Оператор * вертає  числа і проводиться обчислювання
//Вариат №3
//console.log('558' > 22++);
//вернет true
//Помилка. Строку '558' не можливо порівняти з числом
//Вариат №4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
// Не вірно. Виконується 1-а дія sersCounter
// ++ можна використовувати тільки з змінними
// Тому буде 0
//Вариат №5
console.log(!false && 11 || 18 && !'');
//вернет 18
//Н е вірно. Поверне значення 11
//Вариат №5
let usersName = 0;
console.log(usersName ?? "Без імені");
//Поверне 0, тому що usersName = 0 - true.

//IF ELSE в JAVASCRIPT. Условный оператор "?". Примеры IF ELSE. 

//Вариат №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Не вірно!. Тому що 1 === "1" - false

//Вариат №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//'Истина!'

//Вариат №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
//'Истина!'

//Вариат №4
if (0) {
	console.log ('Ложь!')
} else if (" ") {
	console.log('Истина!');
}
//'Истина!'


//Циклы FOR и WHILE в JavaScript. Директивы break и continue. 
//Задача №1
//вывести в консоль числа от 0 до 5
let num = 0;
for(; num < 6; num++) {
	console.log(num);
}


//Задача №2
let numNew = 8;
while (numNew) {
   //Последний результат 0, верно?
	console.log(numNew);
	numNew--;
}
//Не вірно

//Задача №3. Переписать на while
//for (let num=0; num <3; num++) {
//	console.log('Число: ${num}');
//}
let numOne = 0;
while(numOne < 3) {
	console.log(numOne++);
}

//Задача №4. Прекратить работу цикла №1 когда size равна 1
//цикл №1
for (let num = 0; num < 2; num++) {
	//цикл №2
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if(size == 1) break;
	}
}

//Числа в JAVASCRIPT. Тип данных number.
// Работа с числами. проблема неточных вычислений.
//Задача №1. Получить верное значение округдения
//let numeOne = Math.round(1.005 * 100) / 100;
//console.log(numeOne)// 
let sourceNum = 1.005 + Number.EPSILON;
let numeFour = Math.round(sourceNum * 100) / 100;
console.log(numeFour);

//Задача №2. Получить число 135.58 из строки
let value = parseFloat("135.58px");
console.log(value);

//Задача №3. Построить верное условие ветвления
/*if (58 + "фрилансер" !==Nan)  {
   console.log('Результат выражения Nan');
}*/
let valueOne = 58 + "фрилансер";
console.log(Number(58 + "фрилансер"));


//Строки в JAVASCRIPT. Тип данных string. Типы кавычек, поиск, регистр и получение подстроки.
//Задача №1. Верна ли запись
let fls = "фрилансер";
let text = `Привет! Я ${fls}`;
console.log(text);
//Не вірно. Потрібні зворотні -``-

//задача №2. Получить символ "н" строки:
let textOne = "фрилансер";
let firstSymbol = textOne[5];
console.log(firstSymbol);

//Задача №3. Верно?
let textTwo = 123 + "456";
console.log(textTwo);
//Ожидаем 579
//Не вірно. Получаємо рядок 123456

//Задача №4. Получить строку в верхнем регистре
let textThree = 'фрилансер';
console.log(textThree.toUpperCase());

//Задача №5. true или false
let textFour = 'фрилансер';
console.log(textFour.includes('лан',4));
//false 

