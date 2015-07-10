// Prompt user for valid grid size.
$(document).ready(function() {
	gridSize = parseInt(prompt("Please enter a board size: (1-64)"))
		if ( gridSize > 0 && gridSize < 65 ) {
			cancel = false;  // ?????? want to allow cancel box
			createGrid(gridSize);
		} else { 
			gridSize()
			cancel = true; //??????? see krzoldakowski
		}
});

// Set grid size.
function createGrid(gridSize) {
	for (var n = 1; n < gridSize; n++) {
		for (var i = 1; i < gridSize; i++) {
			$("<div class='row'></div>").appendTo("#container");
		};	
		$("<div class='col'></div>").appendTo("#container");
	};

// Calculate box size.
	boxSize = $("#container").width() / gridSize - 2

// Set box size.
	$(".row").width(boxSize);
	$(".row").height(boxSize);
};

// Listen for user choosing other effects.
// effect = $(".default")
// $("button").click(function() {
// 	if $(".black").click(function() {
// 		effect = $(this) // Try this after button click and omitting the if/elsif/else  may need to change "this" to class name!!!!
// 	});
// });


// // Mouse over action.
// function drawEffect {
// 	$(".row").mouseenter(function(){
// 		$(this).addClass(effect);
// 	});
// };

