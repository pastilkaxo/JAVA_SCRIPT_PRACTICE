let table = document.createElement('table');
let a = prompt("a: ");
let b = prompt("b: ");

for(let i = 1; i <= a; i++) {
   tr = table.appendChild(document.createElement('tr'));


for (z = 1; z <= b; z++){
    td = table.appendChild(document.createElement('td'));
    if(i==0)
        td.append(z);

    
    else if(z==0) 
  td.append(i);
  else 
  td.append(i*z);


    
}
}
document.body.append(table);

