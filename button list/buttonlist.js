	var buttons = document.querySelectorAll("button");

	//button click function
$(".list").on("click", "button", function(){
	$(this).toggleClass("select");		
	$(this).parent().siblings().children(".add").toggleClass("exclude");
	//make the button draggable
	$(this).draggable({cancel:false, cursor: "crosshair", revert: "invalid"});
	//hide other buttons when button is clicked
	$(this).parent().siblings().children(".add").toggle(100);
	//$(this).parent().siblings().children(".add").toggle(function(){
	//$(this).attr("disabled");
	//});
});

	//input create new buttons
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		//Send New buttons to the html 
		$(".list").append("<div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
	}
});

	//button delete function
$(".list").on("click", "span", function(event){
$(this).parent().parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

	//hide input box
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

//drag and drop function 
//I have no idea what these codes meean
// I just copied from others and made some changes 
$(".drop").droppable({ accept: ".add", 
           drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
             
                }, 
          over: function(event, elem) {
                  $(this).addClass("over");
                   console.log("over");
          }
                ,
                  out: function(event, elem) {
                    $(this).removeClass("over");
                  }
                     });
$(".drop").sortable();

$(".origin").droppable({ accept: ".add", drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
             
                }});
