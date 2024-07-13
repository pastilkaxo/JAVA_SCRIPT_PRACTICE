function func1()  {
    alert ("Вас приветствует учебный центр");
    let name = prompt("Введите имя");
      alert("Добро пожаловать " + name);
      let vibor = confirm("Хотите стать Web-дизайнером?");
   if (vibor) {
       alert("Учите стили CSS и JavaScript");
   }
   else {
       alert("Упускаете время!");
   }


} 
function fun2(){
    console.log(10 + 5 );
    console.log("10"+"5" );
    document.write(22 + "5", "<br>");
    document.write("22" + 5, "<br>");
    alert("Результатом сложения строки и числа всегда будет строка");
        

    
} 
function fun3( )  {
    let x = 4;
    let y = 3174;
    let res1 =  (35*y-25*x)/5+232;
    document.write(res1 ,"<br>" );
    let res2 = (8*y/x+5*x/y - 43)*6;
    document.write(res2 ,"<br>");
     document.write(res1/res2, "<br>" );
     alert(res1/res2);
     

    
} 
function fun4( )  {
    let x = prompt("Vvedite chislo: ");
    if (x < 20 || (x > 40 && x != 15 && x % 5 == 0))
     alert("Pravilnoe znachenie")
 else
 alert("nepravilnoe znachenie") 

    
} 
function fun51()  {
    let num1 = prompt("Vvedite 1 chislo: ");
    let num2 = prompt("Vvedite 2 chislo: ");
    if (num1>num2)
    alert("NUM1 > NUM2");
    else if(num2>num1)
   alert("NUM2>NUM1");
   else(num1==num2)
   alert("NUM2=NUM1");

    
} 
function fun52()  {
    var a=20;
    var b=44;
    
    var c=(a>b)?10:20;
    
    document.write(c);

    
} 
function fun6()  {
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    alert("Today is: " + day);

    
} 
function fun7( )  {
    let x = 0xFF;
    
    document.write("Шестнадцатиричное число: " , x , "<br>" , );
    let y = 0b111111111 ;
    document.write("Двочисное число: ", y , "<br>");
    let z = 0o377 ;
    document.write("Восьмиричное число: " ,z , "<br>");
    

    
} 
function fun8( )  {
    try {

        alert('Начало блока try');  
        
        lalala; 
        
        alert('Конец блока try (никогда не выполнится)');  
        
        } catch(err) {
        
        alert(`Возникла ошибка!`); 
        
        }

    
} 