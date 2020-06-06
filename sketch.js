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
	unit = new Plant(10,0,i=0,j=2);
	if(frameCount == 100) grid.addUnit(unit);
	unit = new Plant(10,0,i=1,j=3);
	if(frameCount == 150) grid.addUnit(unit);
	unit = new Zombie(3,2,i=4,j=3);
	if(frameCount == 200) grid.addUnit(unit);
}
