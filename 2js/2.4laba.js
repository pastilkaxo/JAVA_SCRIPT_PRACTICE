let table = document.createElement('table');
a = new Number(5);
b =new Number(1/2);
let tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Число";
tr.appendChild(document.createElement('td')).innerHTML = "Метод";
tr.appendChild(document.createElement('td')).innerHTML = "Результат";
tr.appendChild(document.createElement('td')).innerHTML="Описание метода";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = a;
tr.appendChild(document.createElement('td')).innerHTML = "toExponential(6)";
tr.appendChild(document.createElement('td')).innerHTML = a.toExponential(6);
tr.appendChild(document.createElement('td')).innerHTML = "Представляет число в экспоненциальной форме";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = b;
tr.appendChild(document.createElement('td')).innerHTML = "toExponential(6)";
tr.appendChild(document.createElement('td')).innerHTML = b.toExponential(6);
tr.appendChild(document.createElement('td')).innerHTML = "Представляет число в экспоненциальной форме";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = a;
tr.appendChild(document.createElement('td')).innerHTML = "toFixed(1)";
tr.appendChild(document.createElement('td')).innerHTML = a.toFixed(1);
tr.appendChild(document.createElement('td')).innerHTML = "Представляет число в форме с фиксированным количеством цифр после точки";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = b;
tr.appendChild(document.createElement('td')).innerHTML = "toFixed(1)";
tr.appendChild(document.createElement('td')).innerHTML = b.toFixed(1);
tr.appendChild(document.createElement('td')).innerHTML = "Представляет число в форме с фиксированным количеством цифр после точки";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = a;
tr.appendChild(document.createElement('td')).innerHTML = "toPrecision(5)";
tr.appendChild(document.createElement('td')).innerHTML = a.toPrecision(5);
tr.appendChild(document.createElement('td')).innerHTML = "Представляет число с заданным общим количеством значащих цифр";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = b;
tr.appendChild(document.createElement('td')).innerHTML = "toPrecision(5)";
tr.appendChild(document.createElement('td')).innerHTML = b.toPrecision(5);
tr.appendChild(document.createElement('td')).innerHTML = "Представляет число с заданным общим количеством значащих цифр";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = a;
tr.appendChild(document.createElement('td')).innerHTML = "toString(8)";
tr.appendChild(document.createElement('td')).innerHTML = a.toString(8);
tr.appendChild(document.createElement('td')).innerHTML = " Возвращает строковое представление числа в системе счисления с указанным основанием (8-ричная система счисления)";

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = b;
tr.appendChild(document.createElement('td')).innerHTML = "toString(8)";
tr.appendChild(document.createElement('td')).innerHTML = b.toString(8);
tr.appendChild(document.createElement('td')).innerHTML = " Возвращает строковое представление числа в системе счисления с указанным основанием(8-ричная система счисления)";

document.body.append(table);