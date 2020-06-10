
let grid;

function setup() {

	createCanvas(1200,520);
	// used grid externally from the class game, because of the unit class, I will change latter
	grid = new Grid(5,5);
	game = new Game(grid);
}

function draw() {
	background(0);
	//grid.display();
	game.play();
	/*
	//Testing features
	unit = new Plant(10,0,i=0,j=2);
	if(frameCount == 100) grid.addUnit(unit);
	unit = new Plant(10,0,i=1,j=3);
	if(frameCount == 150) grid.addUnit(unit);
	unit = new Zombie(6,2,i=4,j=3);
	if(frameCount == 200) grid.addUnit(unit);
	*/
}
