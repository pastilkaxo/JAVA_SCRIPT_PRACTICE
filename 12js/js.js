// zad 1


var kniga = new Map([[1,"375293435435"],[2,"375442824242"],[3,"375292442424"],[4,"375294535246"] ]);

  let tel = document.getElementById("bu")

   tel.onclick = function(){    
    let key = parseInt(prompt("Vvedite kluch"))
    let res1 = kniga.get(key);
    alert(res1)

   }

   // zad 2

let set = new Set()

set.add(1).add(3).add(5)
console.log(set.size);
console.log(set.has(1))
console.log(set.has(3))
console.log(set.has(5))
console.log(set.has(NaN))


// zad 3

var proto = {
name:"Vlad",
surname: "Lemiasheusky",
otch:"Olegovich",
show:function(){
    document.write( "NAME: " +  this.name + "<br>" + "SURNAME: " + this.surname + "<br>" + "OTCHESTVO: " + this.otch + "<br>" )
}
};

let proto2 = Object.create(proto);
proto2.name = "Vladislav"
proto2.show()


// zad 4


function fio(name =  "Аноним" ){
        document.write("Привет," + name);
}

let bu4 = document.getElementById("bu4")

bu4.onclick =  function ok(){
    const name = prompt("Введите имя: ")
    if(name){
        fio(name)
    }
    else{
        fio()
    }
}



// zad 5

let but = document.getElementsByTagName("button");

function func(){
    let count = 1;

    return function(){
        this.innerHTML = count;
        return count++; 
    
    }
}

for( let i = 0 ; i < but.length ;i++){
    but[i].onclick = func();
};







