
let grid;
let bg;

function setup() {

	createCanvas(window.innerWidth,window.innerHeight);
	frameRate(FR_RATE);

	// used grid externally from the class game, because of the unit class, I will change latter
	grid = new Grid(ROWS,COLS);
	game = new Game(grid,true);

	// Need a server to run this
	//bg = loadImage(BACKPATH);
	//bg.resize(window.innerWidth,window.innerHeight);
}

function draw() {
	background(0);
	//grid.display();
	game.play();
	
}
