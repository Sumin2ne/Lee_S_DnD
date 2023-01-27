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
	puzzleBoard = document.querySelector('.puzzle-board'); 


//functions go in the middle 
//these are the "actions" that should happen
function changeBGImage() {
	debugger;
	//object.property = "new value"
	//theHeadLine.textContent = "Drag and Drop is fun!";
	//theHeadLine.classList.add('orange-headline');


	//change the backgound image in the drop zone
	puzzleBoard.getElementsByClassName.backgroundImage = 'url ("../images/backGround" + this.id +".jpg")';
}



//event handling at the bottom -> how things react when you 
//how is the user going to interact with the elements / controls you provide?

//process a collection of elements and add and event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));