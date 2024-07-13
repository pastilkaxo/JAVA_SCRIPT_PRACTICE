// zad 1
const S = 24;
const n = 129;
let arr = [6-Math.pow(Math.PI, 2)+3*Math.exp(8), 2*Math.cos(4)+Math.cos(12)+8-Math.exp(3), 3*Math.sin(9)+Math.log(5)+S, 2*Math.tan(5)+6-n+Math.sqrt(12)];
document.write("MAX: " + Math.max(...arr) +"<br>"+ "\nIDmax: " + arr.indexOf(Math.max(...arr))+ "<br>");
document.write("MIN: " + Math.min(...arr)+"<br>" + "\nIDmin: " + arr.indexOf(Math.min(...arr))+"<br>");
// zad 3

let array = [ "Hello",  "World" ] ;
  
  let fr = Array.from(array); // массив
  alert(fr.pop()); // World 

  let numbers = Array.of(3); // создаёт массив из произвольного числа аргументов
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

// zad 4

var uar =  ['pow', 'pop', 'push', 'shift', 'round', 'floor', 'sline', 'sort'];
let Muar = [];
let Auar = [];
for (let i = 0; i < uar.length; i++) {
	if (Math.hasOwnProperty(uar[i])) 
		Muar.push(uar[i]);
	else if (Array.hasOwnProperty(uar[i]))
	Auar.push(uar[i]);
}




console.log("First array: " + uar);
console.log("Math methods: " + Muar);
Muar.push('sqrt');
console.log(" Added Math methods: " + Muar);
console.log("Math methods length: " + Muar.length);
console.log("Array methods: " + Auar);
Auar.unshift("slice");
console.log("Added Array methods: " + Auar);
console.log("Array methods length: " + Auar.length);







// zad 5 

let str = "Лемешевский Владислав Олегович";
console.log("Длина: " + str.length);
let strInUpperCase = str.toUpperCase();
let strInLowerCase = str.toLowerCase();
let together = strInUpperCase + strInLowerCase;
let FIO = str.replace( "Лемешевский Владислав Олегович","Л.В.О");
document.write(str + '<br>' + strInLowerCase + '<br>' + strInUpperCase + '<br>' + together + '<br>' + FIO);



// zad 6 
let date = new Date(); 
let table = document.createElement('table');

 tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Год ";
tr.appendChild(document.createElement('td')).innerHTML = date.getFullYear()  ;

 tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Месяц ";
tr.appendChild(document.createElement('td')).innerHTML = date.getMonth()+1;
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "День";
tr.appendChild(document.createElement('td')).innerHTML = date.getDay();

 tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Час";
tr.appendChild(document.createElement('td')).innerHTML = date.getHours();
 tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Минуты";
tr.appendChild(document.createElement('td')).innerHTML = date.getMinutes();
 tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Секунды";
tr.appendChild(document.createElement('td')).innerHTML = date.getSeconds();

document.body.appendChild(table);




