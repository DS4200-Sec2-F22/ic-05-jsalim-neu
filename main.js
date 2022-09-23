// JS File for ic-05

let timesClicked = 0;

// Modifying the webpage
function buttonClicked() {
	timesClicked = timesClicked + 1;

	let newText = 
		"Number of times button clicked: ".concat(timesClicked);

	//selecting element we want to update
	let buttonDiv = document.getElementById("button-div");

	//update text
	buttonDiv.innerHTML = "<p>".concat(newText).concat("</p>");
}