$( "#rmove" ).click(function() {
   $("#rmove").animate({left:320},2000);
  });


$("#cmove").click(function(){
    $("#cmove").animate({left:100 , top: 200},2000)
})


//zad 4 lab 9
 
 $("#canvas")[0].getContext('2d').fillStyle="#ccc"; 
for(var i=0;i<$("#canvas").width();i+=10)
$("#canvas")[0].getContext('2d').fillRect(i,0,1,$("#canvas").height());
   
for(var i=0;i<$("#canvas").height();i+=10)
$("#canvas")[0].getContext('2d').fillRect(0,i,$("#canvas").height(),1);

$("#canvas")[0].getContext('2d').lineWidth = 1;
$("#canvas")[0].getContext('2d').strokeStyle = 'black';
   
   //Ось Y
   $("#canvas")[0].getContext('2d').moveTo(200,500);
   $("#canvas")[0].getContext('2d').lineTo(200,5.5);
   $("#canvas")[0].getContext('2d').lineTo(204,13.5);
   $("#canvas")[0].getContext('2d').moveTo(200,5.5);
   $("#canvas")[0].getContext('2d').lineTo(195,13.5);
   
   //Ось X
   $("#canvas")[0].getContext('2d').moveTo(10,252);
   $("#canvas")[0].getContext('2d').lineTo(394.5,252);
   $("#canvas")[0].getContext('2d').lineTo(386.5,249);
   $("#canvas")[0].getContext('2d').moveTo(394.5,253);
   $("#canvas")[0].getContext('2d').lineTo(386.5,255);
  
   
   $("#canvas")[0].getContext('2d').stroke();



$("button").click(function (){



 var x = -$("#canvas").width()/2;



  if($("#rd1").is(":checked")){
    for(var i=-20;i<20;i+=0.01){
      $("#canvas")[0].getContext('2d').fillStyle= $("#select").val(); 
      $("#canvas")[0].getContext('2d').fillRect(200+i*10,250-Math.pow(i,2),1,1);
    }
  }

  if($("#rd2").is(":checked")){
    for(var i=-20;i<20;i+=0.01){
      $("#canvas")[0].getContext('2d').fillStyle= $("#select").val(); 
      $("#canvas")[0].getContext('2d').fillRect(200+i*10,250-Math.pow(i,3),1,1);
    }
  }
  

  if($("#rd3").is(":checked")){
    $("#canvas")[0].getContext('2d').fillStyle= $("#select").val(); 
    for( x; x < $("#canvas").width() / 2; x += 0.01)
  {
    y = ($("#canvas").height()/ 2 - 40 * Math.sin(x / 40));
    $("#canvas")[0].getContext('2d').fillRect(x + $("#canvas").width() / 2 - 0.5, y - 0.5, 1, 1);
  }
  }

  if($("#rd4").is(":checked")){
    $("#canvas")[0].getContext('2d').fillStyle= $("#select").val(); 
    for( x ; x < $("#canvas").width()/ 2; x += 0.01)
  {
    y = $("#canvas").height() / 2 -  40 * Math.cos(x / 40);
    $("#canvas")[0].getContext('2d').fillRect(x + $("#canvas").width()/ 2 - 0.5, y - 0.5, 1, 1);
  }
  }

})


