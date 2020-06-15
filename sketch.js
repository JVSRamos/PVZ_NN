
let grid;

function setup() {

	createCanvas(1200,520);
	frameRate(FR_RATE);
	
	// used grid externally from the class game, because of the unit class, I will change latter
	grid = new Grid(ROWS,COLS);
	game = new Game(grid);

}

function draw() {
	background(0);
	//grid.display();
	game.play();
	
}
