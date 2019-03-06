var buttons = document.querySelectorAll("button");
     //button click function
    
$(".list").on("click", "button", function(){
	$(this).toggleClass("select");		
	// $(this).parent().siblings().children(".add").toggleClass("exclude");
	// $(this).children().children(".fa fa-trash").toggleAttr("class","fa fa-check","fa fa-trash");
	$(this).draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
	// $(this).toggle(function(){
	// 	$(this).draggable({cancel:false},{ cursor: "crosshair", revert: "invalid"});
	// });
	// $(this).parent().siblings().children(".add").toggle(100);
	// $(this).attr("disabled");
});

	//Input enter create buttons
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$(".list").append("<div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
	}
});
	
	//Delete button function
$(".list").on("click", "span", function(event){
$(this).parent().parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

	//Hide input function
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
  //drag and drop components
// $(".add").draggable({ cursor: "crosshair", revert: "invalid"});
$(".timeSlot").droppable({ accept: ".add", 
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
$(".timeSlot").sortable();

$(".origin").droppable({ accept: ".add", drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
}});