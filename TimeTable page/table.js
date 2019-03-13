
//Give draggable function to all buttons
  $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});


	//Customize events(create new event buttons by typing text in the input box)
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$(".list").append("<div class=\"origin\"><button class=\"add btn btn-secondary\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
  }
});
	
	//Delete button function in the event list
$(".list").on("click", "span", function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

  //Delete button function in the timetable
$("#timetable").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

	//Hide and show input box 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

  //Refresh function(used when the button is dropped)
  function init(){
    $(".list").find(".origin").remove();
    $(".list").append("<div class=\"origin\"><button class=\"add btn btn-primary\"><span><i class=\"fa fa-trash\"></i> </span>Eat</button></div><div class=\"origin\"><button class=\"add btn btn-success\"><span><i class=\"fa fa-trash\"></i></span>Workout</button></div><div class=\"origin\"><button class=\"add btn btn-warning\"><span><i class=\"fa fa-trash\"></i></span>Sleep</button></div><div class=\"origin\"><button class=\"add btn btn-info\"><span><i class=\"fa fa-trash\"></i></span>Laundry</button></div><div class=\"origin\"><button class=\"add btn btn-dark\"><span><i class=\"fa fa-trash\"></i></span>Study</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
  } 

  //Button Drop function for timetable and event list
$(".timeSlot").droppable({ accept: ".add", 
           drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            console.log(this + " drodripdroppped");
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);  
  //When the buttons are dropped, generate new preset event buttons
            init(); 
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

//Belows allows user to bring button back to task bar on the side

// $(".origin").droppable({ accept: ".add", drop: function(event, ui) {
//                     console.log("drop2");
//                    $(this).removeClass("border").removeClass("over");
//              var dropped = ui.draggable;
//             var droppedOn = $(this);
//             $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
// }});