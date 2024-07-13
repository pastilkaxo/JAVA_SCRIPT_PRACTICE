
function but1() {

     let fac = document.forms["data"].faculty.value
let fam = document.getElementById("family").value;
let spec = document.forms["data"].speciality.value
let kurs = document.forms["data"].kours.value
var markedCheck = document.forms["data"].elements.subject;
	
		 



var ul = document.createElement("ul")  
for(var i =0; i<markedCheck.length;i++){
     if(markedCheck[i].checked){
          ul.appendChild(document.createElement("li")).innerHTML = markedCheck[i].value;
     }
}

let secondForm = document.createElement("form");
	var select =  secondForm.appendChild(document.createElement("select"));
	for (var i = 0; i < markedCheck.length; i++) {
          if(markedCheck[i].checked){
		select.appendChild(document.createElement("option")).innerHTML = markedCheck[i].value;
          }
	}


document.write("<h4>" + fac + "</h4>")
document.write(" Судент " + fam + " специальность " + spec + " курс " + kurs + " должен сдавать следующие предметы: <br> ")
	





document.body.appendChild(ul);
document.body.appendChild(secondForm)


  




  
}
