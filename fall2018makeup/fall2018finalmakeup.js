/*JS / jQuery  Navbar*/
$(".menu").click(function() { //clicking on a menu shows/hides associated submenu
    $(this).next(".submenu").slideToggle(); //us jQuery to slide the menu up and down when showing/hiding
});

/*JS / jQuery AJAX Content Loading*/
//load story0.txt by default
let text0 = ("story0.txt")
$("#story").load(text0);

//change the story text based on whichever link you click

/*
ATTEMPT #1
$("ul#stories").change(function(){
    text = $(this).val();
    $("#story").load(text);
})

ATTEMPT #2
$("ul#stories li#story0.txt").click(function(){
    $("#story").load(text);
})

let text1 = ("story1.txt")
$("ul#stories li#story1.txt").click(function(){
    $("#story").load(text1);
})

let text2 = ("story1.txt")
$("ul#stories li#story2.txt").click(function(){
    $("#story").load(text2);
})
*/

/*EXTRA CREDIT*/
//button
var button = document.getElementById("increment"),
    count = 0;
document.getElementById("currentcount").innerHTML = "I've been clicked " + count + " times!";

button.onclick = function() {
  count += 1;
  document.getElementById("currentcount").innerHTML = "I've been clicked " + count + " times!";
};