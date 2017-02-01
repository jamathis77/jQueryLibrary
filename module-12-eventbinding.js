$(document).ready(function(){
	//$("*").css("background-color", "blue");

	//binding an event with on
		//"click" is one type of event
		$("#on li").on("click", function(){
			//this selects the li that was clicked
			$(this).hide();
		})

	//using off to unbind an event
		$("#off li").on("click", function(){
			//this selects the li that was clicked
			$(this).hide();
			$("#off li").off("click");
		})

	//Event Helpers = this is the same as above code
		$("#off li").click(function(){
			//this selects the li that was clicked
			$(this).hide();
			$("#off li").off("click");
		})

});