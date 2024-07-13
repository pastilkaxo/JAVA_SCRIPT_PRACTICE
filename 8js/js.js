
// EventTarget.addEventListener()
// target.addEventListener(type, listener[, options]);

// zad 1

let span1 = document.getElementById("first");
span1.onmouseover= function () {
    
    span1.style.color='red';

}
span1.onmouseout= function () {
    
    span1.style.color='black';

}
// zad 2

let span2 = document.getElementById("second");

span2.onclick = function(){
    span2.style.fontSize ='3.5em';
}

//zad 3

let img1 = document.getElementById("third");

img1.onclick = function(){
    img1.src ="https://static.wikia.nocookie.net/naruto/images/3/34/Sasuke_Part_1.jpg/revision/latest?cb=20210404192311&path-prefix=ru";
}

//zad 4

let img2 = document.getElementById("four");

img2.onclick = function(){
    img2.innerHTML='<img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg">';
}

//zad 5 

let img3 = document.getElementById("five");

img3.onmouseover = function(){
    img3.style.width='400px';
}
img3.onmouseout = function(){
    img3.style.width='300px';
}

//zad 6 

let p1 = document.querySelector('p');

p1.ondblclick = function(){
   p1.style='border: 3px solid green; width:300px;';
}




