$(document).ready(function(){
	$("#selectMe").css("background-color", "aqua");
	$("#selectMe").css("font-family", "Impact");
    $("h3").css("color", "green");
	$("h3").click(function(){
		$("h3").fadeOut("slow");
	});
	$("#listSelect li:nth-child(1)").css("color", "red");

});