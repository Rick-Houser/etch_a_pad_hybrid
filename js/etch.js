// Prompt user for valid grid size.
$(document).ready(function() {
	gridSize = parseInt(prompt("Please enter a board size: (1-64)"))
		if ( gridSize > 0 && gridSize < 65 ) {
			for (var x = 1; x < gridSize; x++) {
				for (var i = 1; i < gridSize; i++) {
					$("<div class='row'></div>").appendTo("#container");
				}; 
				$("<div class='col'></div>").appendTo("#container");
			};
			// Calculate box size.
			boxSize = $("#container").width() / gridSize - 2;

			// Set box size.
			$(".row").css({"width":boxSize, "height":boxSize});

		} else { 
			alert("Invalid input. Refresh the page to try again.")
		};
});

// Listen for mouse clicks.	
$(document).ready(function() {	

	$(".gradient").click(function() {
		$(".row").mouseenter(function() {
		$(this).css("opacity", $(this).css("opacity") * 0.75);
		});
	});

	$(".trail").click(function() {
		$(".row").hover(function() {
			$(this).css("opacity", 0);
		}, function () {
			$(this).fadeTo('fast', 1);
		});
	});

	$(".rainbow").click(function() {
		$(".row").mouseenter(function() {
			$(this).css("background", randomColor());
		});
	});

	$(".clear").click(function() {
		location.reload();
	});
});

// Run default color if none chosen above.
$(document).ready(function() {
	effect = "default"
	$(".row").mouseenter(function() {
		$(this).addClass(effect);
	})
});

// Calculates random color and prepends with #.
function randomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}


