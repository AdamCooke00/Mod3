var buttons = document.querySelectorAll("button");
     //button click function
    

     $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
// $(".list").on("click", "button", function(){
// 	$(this).toggleClass("select");		
	// $(this).parent().siblings().children(".add").toggleClass("exclude");
	// $(this).children().children(".fa fa-trash").toggleAttr("class","fa fa-check","fa fa-trash");
	
	// $(this).toggle(function(){
	// 	$(this).draggable({cancel:false},{ cursor: "crosshair", revert: "invalid"});
	// });
	// $(this).parent().siblings().children(".add").toggle(100);
	// $(this).attr("disabled");
// });

	//Input enter create buttons
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$(".list").append("<div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
  }
});
	
	//Delete button function in the list
$(".list").on("click", "span", function(event){
$(this).parent().parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

  //Delete button function in the timetable
$("#timetable").on("click", "span", function(event){
  $(this).parent().parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

	//Hide input function
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

  //Refresh function
  function init(){
    $(".list").find(".origin").remove();
    $(".list").append("<div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span>Eat</button></div><div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span>Workout</button></div><div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span>Sleep</button></div><div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span>Laundry</button></div><div class=\"origin\"><button class=\"add\"><span><i class=\"fa fa-trash\"></i></span>Study</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
  } 

  //drag and drop components
// $(".add").draggable({ cursor: "crosshair", revert: "invalid"});
$(".timeSlot").droppable({ accept: ".add", 
           drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
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
$(".timeSlot").sortable();

$(".origin").droppable({ accept: ".add", drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
}});