/* Don't use <script> tags in a linked js file! */

/*JavaScript Content Load Menu*/
$(".menuitem").click(function() { //clicking on a menu shows/hides associated submenu
    $(this).next(".submenu").slideToggle(); //us jQuery to slide the menu up and down when showing/hiding
});

/*JavaScript AJAX Content Loading*/
//initiate variables
let myContent = "content1.txt";

$("#choose-content").val(myContent); //changes the menu option to my name and the date by default
$("#content").load(myContent); //changes the #content to my name and the date

$("#choose-content").change(function(){
    myContent = $(this).val();
    $("#content").load(myContent);
})