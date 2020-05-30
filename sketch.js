let grid;
let unit;

function setup() {

	createCanvas(1200,520);
	grid = new Grid(5,5);
	
}

function draw() {
	background(0);
	grid.display();

	//Testing features
	unit = new Plant(0,0,i=0,j=2);
	if(frameCount == 100) grid.addUnitToCell(unit,0,2);
}
