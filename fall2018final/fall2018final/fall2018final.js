'use strict';
$(".menu").click(function() {
    $(this).next(".items").slideToggle();
});

let text = ("article0")
$("form").val(text); 
$("input").load(text);

$("form").change(function() {
	text = $(this).val();
	$("input").load(text); 
});