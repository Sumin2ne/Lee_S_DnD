(() => {
	// set up the puzzle pieces and boards
	
})();



// select your elements first - what is the user going to interact with?
//there are the target => these are what the "user" uses

//this is a 1 to 1 connection to an element in the DOM
// let navButtons = document.querySelectorAll('#buttonOne'); 

//this is a 1 to many connection to an element in the DOM
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadLine = document.querySelector('#headLine h1'),

	//collect All of the draggable pieces in the drag zone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	//collect All of the drop zone elements
	dropZones =document.querySelectorAll('.drop-zone')
	puzzleBoard = document.querySelector('.puzzle-board'),
	templink = document.querySelector('a')
	//set up a global variable to store a reference to the dragged piece
	//I need to know this later when I drop it on a zone
	draggedPiece;




//functions go in the middle 
//these are the "actions" that should happen
function changeBGImage() {

	// let newBGPath ="images/backGround" + this.id +".jpg";
	// debugger;
	
	//object.property = "new value"
	//theHeadLine.textContent = "Drag and Drop is fun!";
	//theHeadLine.classList.add('orange-headline');
	
	
	//change the backgound image in the drop zone
	//the `${}` is called a JavaScript Templete String - whatever is inline the curly
	//braces is evaluated at runrime and interpolated (replaces the bracket notation)

	//you can use variables, functions, etc inline in your code this way
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	
	// puzzleBoard.getElementsByClassName.backgroundImage = 'url ("../images/backGround" + this.id +".jpg")';
}

function handleStartDrag(){console.log('started dragging a piece!');}

function handleStartDrag(){draggedPiece = this;}
function handleDragOver(){console.log('dragging over me!');}

function handleDrop(){console.log('dropped on me!');}

function handleDrop(e) {
	//block the default behaviour
	e.preventDefault();

	//and then do whatever you want.
	console.log ('dragging over me!');
	e.target.appendChild('')
}

//event handling at the bottom -> how things react when you 
//how is the user going to interact with the elements / controls you provide?

//process a collection of elements and add and event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));

//add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
//add the drager handling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) { 
	// e is shorthand for event -> in this case the nav event
	//don't let the defaut behaviour of certainelements happen - block it 
	e.preventDefault();
}

// temp handling
templink.addEventListener ('click', blockDefaultBehaviour);