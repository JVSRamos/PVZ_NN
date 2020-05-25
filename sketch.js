let grid;

function setup() {
	createCanvas(1200,520);
	grid = new Grid(5,5);
	unit = new Unit(0,0,2,2);
}

function draw() {
	background(0);
	grid.display();
	unit.draw();
}