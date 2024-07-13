function Gruppa(n,spec,kolich) {

	//номер, специальность, количество
	
	this.n=n;
	
	this.spec=spec;
	
	this.kolich=kolich;
	
	
	
	this.add_stud=function add_stud(k) {
	
	this.kolich+=k;
	
	document.write('В группу ' + this.n + ' добавили '+ k + ' студентов.<br>');
	
	}

	this.sub_stud = function sub_stud(k) {
		this.kolich-=k;
		document.write('С группы ' + this.n + 'отчислили '+ k + ' студентов.<br>');
	}
	}
	gr1=new Gruppa(2, 'ИСиТ', 30);
	gr1.add_stud(2);
	gr1.sub_stud(4);
	gr2=new Gruppa(1, 'ПОиТ', 31);
	gr2.add_stud(3);
	gr2.sub_stud(1);


	Gruppa.prototype.kurs=this.kurs
	gr1.kurs=2+"курс"
	Gruppa.prototype.kurs=this.kurs
	gr2.kurs=4+"курс"
	


document.write( gr1.n +"\n",gr1.spec +"\n", gr1.kolich +"\n" ,gr1.kurs + "<br>");
document.write( gr2.n +"\n",gr2.spec +"\n", gr2.kolich +"\n" ,gr2.kurs + "<br>");
 // zad 2

// ( имя , фамилия , возраст ,оценка по физике , оценка по матану , оценка по инфе , среднее арифм.)
 function Student(name ,surname,vozr, num1, num2 , num3 , num4 ) {

 

this.name = name;
this.surname = surname;
this.num1 = num1;
this.num2 = num2;
this.num3 = num3;
this.num4 = num4;
this.vozr = vozr;


this.stud = function stud(){
	this.num4 = (this.num1+this.num2+this.num3)/3
	alert("Имя: " + this.name  +"Фамилия: " + this.surname )
   document.write( "Средний балл: " + this.name + this.num4.toFixed(1) + "\n"+ "Возраст: " + this.vozr + "<br>");

}





 }
 let p  = new Student('Владислав ', 'Лемешевский',14,4 ,5,7,);
p.stud();

let  v = new Student('Олег ', 'Бородулин',15, 6 , 9, 10,);
v.stud();
let  t = new Student('Максим ', 'Лихий',16, 2 , 1, 5,);
t.stud();

Student.prototype.class = this.class;
p.class = 9 + "Класс"

// zad 3


var uar =  ['pow', 'pop', 'push', 'shift', 'round', 'floor', 'sline', 'sort'];
console.log("1:")
console.log("Исходный массив: " + uar)
 delete uar[2];
console.log("Новый массив: " + uar);
console.log("2:")
console.log([1] in uar);
console.log(Number in Gruppa);
console.log(this.name in Student);
console.log("3:")
console.log(Student instanceof Array);
console.log(Student instanceof String);
console.log(Student instanceof Object);
console.log(Gruppa instanceof Array);
console.log(Gruppa instanceof String);
console.log(Gruppa instanceof Object);

function Chet(){
	return 5;
}

console.log("4:");
console.log(typeof Chet);
console.log(typeof Student);
console.log(typeof Gruppa);
console.log(typeof gr1);
console.log(typeof gr2);
console.log(typeof add_stud);
console.log(typeof sub_stud);
console.log(typeof uar);
console.log(typeof p);
console.log(typeof v);
console.log(typeof t);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);
console.log(typeof gr1.kurs);
console.log(typeof gr1.n);
console.log(typeof gr1.kolich);


