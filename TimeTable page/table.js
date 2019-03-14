
//Give draggable function to all buttons
  $("button").draggable({cancel:false ,cursor: "crosshair", revert: true});


	//Customize events(create new event buttons by typing text in the input box)
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("#list").append("<div class=\"origin\"><button class=\"add btn btn-secondary\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: true});
  }
});
	
	//Delete button function in the event list
$("#list").on("click", "span", function(event){
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

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
  if($(this).attr("title") == "Hide New Events"){
    $(this).attr("title","Add New Events");
  }
  else if($(this).attr("title") == "Add New Events"){
    $(this).attr("title","Hide New Events");
  }
});

	//Hide and show input box 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

  //Button Drop function for timetable and event list
$(".timeSlot").droppable({ accept: ".add", 
          drop: function(event, ui) {
          console.log("drop");
           $(this).removeClass("border").removeClass("over");
          var dropped = ui.draggable;
          var droppedOn = $(this);
          var newBtn = $(dropped).clone();
          $(dropped).draggable("option", "revertDuration", 0);
          $(newBtn).css({top: 0,left: 0}).appendTo(droppedOn);
          setTimeout(function(){
          $(dropped).draggable("option", "revertDuration", 500);
          }, 100);
          $("button").draggable({cancel:false ,cursor: "crosshair", revert: true});
          }, 
          over: function(event, elem) {
          $(this).addClass("over");
          console.log("over");
          },
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