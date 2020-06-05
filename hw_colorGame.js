// alert("connected");




var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");


for(var i = 0; i < modeBtn.length; i++ ){
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
		reset();
	})
}

function reset() {
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// reset h1 background color
	h1.style.backgroundColor = 'steelblue';
	// hide message
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
}


// easyBtn.addEventListener("click", function(){
// 	// Highlight selected button
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");	
// 	numSquares = 3;
// 	// generate new colors
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	// Highlight selected button
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	// generate new colors
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0 ; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
	// add initial colors to square
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color then compare
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = '#ededed';
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color) {
	//  loop thru all squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// add num random colors to arra
	for(var i = 0; i < num; i++){
		// get random color, putsh into array
		arr.push(randomcolor());
	}
	// return array
	return arr;
}

function randomcolor(){
	// pick a red
	var r = Math.floor(Math.random() * 256);
	// pick a green
	var g = Math.floor(Math.random() * 256);
	// pick a blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




