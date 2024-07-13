/* 
Так было до 2009 года, когда появился ECMAScript 5 (ES5). 
Он добавил новые возможности в язык и изменил некоторые из существующих. 
Чтобы устаревший код работал, как и раньше, по умолчанию подобные изменения не применяются.
 Поэтому нам нужно явно их активировать с помощью специальной директивы: "use strict".
*/


"use strict"


// zad 1
let numbers = new Array();
numbers = [1, 2, 3, 4, 5, 6]
let n = parseInt(prompt("Введите номер элемента массива"))
console.log(numbers.includes(n))

// zad 2

let test2 = new Array();
test2 = [1, NaN , 3 , 5 ,10];

console.log(test2.includes(NaN));
console.log(test2.indexOf(NaN));



// zad 3

let ar1 = new Array(4);
let ar2 = new Array(4);

ar1 = ['A' , 'B' , 'C', 'D'];
ar2 = ['А' , 'Б', 'В' , NaN];

let sym = prompt("Введите символ");

if(ar1.includes(sym)){
    console.log("В первом массиве есть такой символ " + sym);
}
else if(ar2.includes(sym)){
    console.log("Во втором массиве есть такой символ " + sym);
}

else{
    console.log("Во обоих массивах нет такого символа " + sym);
}



// zad 4 

let res1 = (1234**2 * 23) / 5 + 234
let res2 = 28 * 765**2/5 * 43**2
let res3 = 3734**6 - (434**6 + 1024**4)/5
let res4 = 6543**35 - 965732
let res5 = (1000**10 + 100000**10)/10000

console.log(parseInt(res1.toFixed(1)))
console.log(parseInt(res2.toFixed(1)))
console.log(parseInt(res3.toFixed(1)))
console.log(parseInt(res4.toFixed(1)))
console.log((res5))


