$(document).ready(function(){

	//$("*").css("background-color", "blue");
	var text = "<h1>Hail the New Text!</h1>"
	$("#divText").append(text);

	$("#styled").css("color", "green");

	$("#adding-class").addClass("li-class");
	$(".li-class").css("color", "red");

});