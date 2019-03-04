	var buttons = document.querySelectorAll("button");

	//button click
$(".list").on("click", "button", function(){
	$(this).toggleClass("select");		
	$(this).parent().siblings().children(".add").toggleClass("exclude")
	$(this).parent().siblings().children(".add").toggle(function(){
	$(this).attr("disabled");
	});
	});

	//input create new buttons
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$(".list").append("<div><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
	}
});

	//button delete
$(".list").on("click", "span", function(event){
$(this).parent().parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

	//hide input 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

// var colors = ['#ff0000', '#00ff00', '#0000ff'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// $("button").css('color', random_color);
// buttons[0].style.backgroundColor = random_color; 
 // $(document).ready(function()	
 //            {
 //                var myColors = new Array();
 //                myColors[0] = "#2672EC";
 //                myColors[1] = "#97009F";
 //                myColors[2] = "#094DB5";
 //                myColors[3] = "#00A300";
 //                myColors[4] = "#DA532C";
 //                myColors[5] = "#AF1A3F";
 //                myColors[6] = "#613CBC";
 //                myColors[7] = "#008AD2";

 //                var rand = Math.floor(Math.random()*myColors.length); 
 //                $('button').css("background-color", myColors[rand]); 
 //            });