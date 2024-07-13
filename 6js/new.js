// zad1
for (let i=0;i<document.all.length;i++){
console.log((i+1)+": " + document.all[i].tagName)
}



//zad 2
    console.log(document.body.childNodes)
//zad3

for(let i = 0; i < document.all.length; i++){
	if(document.all(i).tagName === "SPAN")
		{
			alert(document.all(i).innerHTML);
			break;
		}
}

alert(document.querySelectorAll("span")[0].innerHTML);


alert(document.getElementById("first").innerHTML);

// zad 4

	var num1 = document.getElementById("1").innerHTML;
	var num2 = document.getElementById("2").innerHTML;
	var num3 = document.getElementById("3").innerHTML;
	var num4 = document.getElementById("4").innerHTML;
	var num5 = document.getElementById("5").innerHTML;
	
	var summ = (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5))/5;
	console.log("AVG: "+ summ);  
	
//zad 4 + span

document.getElementById("second").innerHTML += ", средний балл: " + summ;