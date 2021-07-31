var numSquares = 6;

var colors = generateColor(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBTN = document.querySelector("#easy");
var hardBTN = document.querySelector("#hard");

var pickedColor = randomPick();

colorDisplay.textContent = pickedColor;

easyBTN.addEventListener("click",function(){
	easyBTN.classList.add("selected");
	hardBTN.classList.remove("selected");
	numSquares = 3
	colors = generateColor(numSquares);
	pickedColor = randomPick();
	colorDisplay.textContent = pickedColor;
	for(var i=3; i<squares.length; i++){
		squares[i].style.display = "none";
	}
	for(var i=0; i<3; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
});

hardBTN.addEventListener("click",function(){
	easyBTN.classList.remove("selected");
	hardBTN.classList.add("selected");
	numSquares = 6;
	colors = generateColor(numSquares);
	pickedColor = randomPick();
	colorDisplay.textContent = pickedColor;
	for(var i=3; i<squares.length; i++){
		squares[i].style.display = "block";
	}
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
});


resetButton.addEventListener("click",function(){
	colors = generateColor(numSquares);
	pickedColor = randomPick();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
});

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			for(var j=0; j<squares.length; j++){
				squares[j].style.backgroundColor = pickedColor;
			}
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function randomPick(){
	var pick = Math.floor(Math.random()*colors.length);
	return colors[pick];
}

function generateColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(generateRandomColor());
	}
	return arr;
}

function generateRandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}