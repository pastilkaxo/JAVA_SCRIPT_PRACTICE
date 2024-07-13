console.log('Первое задание') //выведем на экран все тэги и их номера в коллекции all 
for (let i = 0; i < document.all.length; i++){ 
    console.log("Тэг номер " + (i + 1) + ": " + document.all[i].tagName);//document.all возвращает все содержимое страницы  
}

console.log('Второе задание') //выведем все дочерние элементы узла document.body
for(let i = 0; i < document.body.childNodes.length; i++){ //childNodes - «коллекция» или «псевдомассив» 
	console.log(document.body.childNodes[i]); //цикл перебирает всех потомков document.body
} 

console.log('Третье задание') //выведем в окно содержимое первого элемента span
for(let i = 0; i < document.all.length; i++){ //используя для доступа к элементу коллекцию all
	if(document.all(i).tagName == "SPAN")
		{
			console.log(document.all(i));
			break;
		}
} //складываться и делиться на количество
//возвращает массив элементов
console.log(document.querySelectorAll("span")[0]); //используя частную коллекцию (span) 

console.log(document.getElementById("first")); //используя идентификатор элемента

//Четвертвое задание
let table = document.getElementById("table"); // организуем доступ к содержимому таблицы и посчитаем свой средний балл
let avgAllSubject = 0;
let sum = 0;
let avgSubject;
for(let i = 1; i < table.rows.length; i ++){
 sum = 0;
 for(let j=2; j < table.rows[i].cells.length; j++){
  sum += Number(table.rows[i].cells[j].innerHTML); // суммируем значения написанные в строках
 }
 avgSubject = Number(sum / (table.rows[i].cells.length - 2)); //делим сумму в строках на количество ячеек - 2
 avgAllSubject += avgSubject;
}

//возвращает ссылку на элемент идентификатором second
let countSubject = table.rows.length - 1 ; // узнаем количество строк 
document.getElementById("second").innerHTML += ", средний балл: " + (avgAllSubject / countSubject); //добавим значение среднего балла к содержимому второго элемента span