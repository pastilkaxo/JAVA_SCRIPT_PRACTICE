// zad 1

let flag = false; //переменная-триггер
function drag1() {

    onmousemove = function() {
      var txt =  document.getElementById("text_move");
        if (flag) {
            txt.style.top = event.clientY - (txt.style.height / 2) + "px";
            txt.style.left = event.clientX - (txt.style.width / 2) + "px";
        }

    }

}
function drag2() {

  onmousemove = function() {
      var img =  document.getElementById("img_move");
      if (flag) {
          img.style.top = event.clientY - (img.style.height / 2) + "px";
          img.style.left = event.clientX - (img.style.width / 2) + "px";
      }

  }

}

onclick = function(){
	flag = !flag;
}

//zad 2

zad2.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      zad2.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, );
  }
  //zad 3
  zad3.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
  console.log(timePassed)
        zad3.style.left = (timePassed/5) + 'px';
        zad3.style.top = (timePassed/5) + 'px';
  
        if (timePassed > 1000) {
         clearInterval(timer);
        }


      }, 20);
    }

  // zad 4
  var ctx=canvas.getContext("2d");
  ctx.fillStyle="#ccc"; 
  for(var i=0;i<canvas.width;i+=10)
     ctx.fillRect(i,0,1,canvas.height);
  for(var i=0;i<canvas.height;i+=10)
     ctx.fillRect(0,i,canvas.height,1);


     ctx.lineWidth = 1;
     ctx.strokeStyle = 'black';
     
  
     ctx.moveTo(200,500);
     ctx.lineTo(200,5.5);
     ctx.lineTo(204,13.5);
     ctx.moveTo(200,5.5);
     ctx.lineTo(195,13.5);
     
    
     ctx.moveTo(10,252);
     ctx.lineTo(394.5,252);
     ctx.lineTo(386.5,249);
     ctx.moveTo(394.5,253);
     ctx.lineTo(386.5,255);
    
     
     ctx.stroke();

   function draw(){

   var color = document.getElementById("select").value;


    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var rd3 = document.getElementById("rd3");
    var rd4 = document.getElementById("rd4");
   var x = -canvas.width/2;

    if(rd1.checked){
      for(var i=-20;i<20;i+=0.01){
        ctx.fillStyle=color; 
        ctx.fillRect(200+i*10,250-Math.pow(i,2),1,1);
      }
    }

    if(rd2.checked){
      for(var i=-20;i<20;i+=0.01){
        ctx.fillStyle=color; 
    ctx.fillRect(200+i*10,250-Math.pow(i,3),1,1);
      }
    }
    

    if(rd3.checked){
      ctx.fillStyle=color; 
      for( x; x < canvas.width / 2; x += 0.01)
		{
			y = (canvas.height / 2 - 40 * Math.sin(x / 40));
			ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
		}
    }

    if(rd4.checked){
      ctx.fillStyle=color; 
      for( x ; x < canvas.width / 2; x += 0.01)
		{
			y = canvas.height / 2 -  40 * Math.cos(x / 40);
			ctx.fillRect(x + canvas.width / 2 - 0.5, y - 0.5, 1, 1);
		}
    }

  }
 

 
  
   


