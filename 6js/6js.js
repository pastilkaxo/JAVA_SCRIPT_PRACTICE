function but1(){
    openedWindow = window.open('file:///C:/Users/%D0%92%D0%BB%D0%B0%D0%B4/Desktop/window.html');

}



function but2(){
    newWin2=window.open("about:blank","width=200,height=300");

}
function but22 (){
newWin2.document.write("ABC");
}






let table = document.createElement('table');

let tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Свойство";
tr.appendChild(document.createElement('td')).innerHTML = "Значение";


tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "userAgent";
tr.appendChild(document.createElement('td')).innerHTML = navigator.userAgent;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "appVersion";
tr.appendChild(document.createElement('td')).innerHTML = navigator.appVersion;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML ="AppName";
tr.appendChild(document.createElement('td')).innerHTML = navigator.appName;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "AppCodeName";
tr.appendChild(document.createElement('td')).innerHTML = navigator.appCodeName;


tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Platform"
tr.appendChild(document.createElement('td')).innerHTML = navigator.platform;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "JavaEnabled()"
tr.appendChild(document.createElement('td')).innerHTML = navigator.javaEnabled();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Screen: width,heigth"
tr.appendChild(document.createElement('td')).innerHTML = screen.width ;
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "Screen: width,heigth"
tr.appendChild(document.createElement('td')).innerHTML =  screen.height;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "ColorDelph"
tr.appendChild(document.createElement('td')).innerHTML = screen.colorDepth;
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "history"
tr.appendChild(document.createElement('td')).innerHTML = window.history
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "href"
tr.appendChild(document.createElement('td')).innerHTML = location.href;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "pathname"
tr.appendChild(document.createElement('td')).innerHTML = location.pathname;

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = "host"
tr.appendChild(document.createElement('td')).innerHTML = location.host;


document.body.append(table);