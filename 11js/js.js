
// zad 1 laba 8
$("#first").mouseover(function(){
    $("#first").css("color","red")})
$("#first").mouseout(function(){
    $("#first").css("color","black")})

// zad 2 laba 8

$("#second").click(function(){
    $("#second").css("font-size","3.5em")
});

// zad 3 laba 8

$("#third").click(function(){
    $("#third").attr("src","https://static.wikia.nocookie.net/naruto/images/3/34/Sasuke_Part_1.jpg/revision/latest?cb=20210404192311&path-prefix=ru")
})

// zad 4 laba 8

$("#four").click(function(){
    $("#four").html('<img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg">')
})

// zad 5 laba 8

$("#five").mouseover(function(){
    $("#five").css("width","400px")
})
$("#five").mouseout(function(){
    $("#five").css("width","300px")
})

// zad 6 laba 8


$("p").dblclick(function(){
    $("p").css("border","solid green 3px")
    $("p").css("width","300px")
})