// zad 1 
const trans = {
    Ferrari:1,
    Lamborgini:1,
    Bugatti:2,
    Airplane:1,
    Helicopter:1
};

const values1 =  Object.values(trans);
console.log(values1);

const values2 = Object.keys(trans)
console.log(values2);

// zad 2

const numbers = [0, 1, 10, 100, 1000, 10000 , 100000].map(num=>
    num.toString().padStart(15, '0')  );
    const numbers2 = [0, 1, 10, 100, 1000, 10000 , 100000].map(num=>
        num.toString().padEnd(15, '0')  );
        console.log(numbers);
        console.log(numbers2);


// zad 3

const fio = {
name:'Vlad',
surname:'Lemiasheusky'
};

console.log(fio.name.padStart(20 , "?"))
console.log(fio.surname.padEnd(20 , "18"))
    


// zad 4


let sym = new Array(4);
sym = ['A' , 'B' , 'C', 'D'];

sym.forEach((n)=> {
    console.log(n.padStart(2,"1"));
    console.log(n.padEnd(4 , "0"));


})


  


// zad 5

var house = {
    cost:"100000$",
    place:"USA,California",
    rooms:5,

}

Object.defineProperty(house , 'floars' , {
    value:2
})

console.log(Object.getOwnPropertyDescriptor(house , 'floars'))



// zad 6

/* Дескрипторы свойств, присутствующие в объектах, бывают двух основных типов: дескрипторы данных и дескрипторы доступа.
 Дескриптор данных — это свойство, имеющее значение, которое может быть (а может и не быть) записываемым. 
 Дескриптор доступа — это свойство, описываемое парой функций — геттером и сеттером. 
 Дескриптор может быть только чем-то одним из этих двух типов; он не может быть одновременно обоими.*/

var car = {};


// Дискр. данных

Object.defineProperty(car, 'name' , {

    value:"Ferrari",
    writable: true,
    enumerable: true,
    configurable: true
   
});

console.log(car)



// Дискр доступа


var car2 = {};

Object.defineProperty(car2 ,"first" ,{  // добавляем в объект новое свойство с методами доступа
    get:function(){ // устанавливаем функцию, которая позволяет получить значение для свойства
        let name = "Ferrari";
        return name;
    },
    set:function(newValue){ // устанавливаем функцию, которая позволяет установить новое значение для свойства
       this.name = newValue;    // устанавливаем значение свойства
    },
    enumerable: true, // устанавливаем, что свойство перечислимо 
    configurable: true // устанавливаем, что удаление свойства допускается, а также допускается изменение дескриптора
})
console.log(car2)







   






