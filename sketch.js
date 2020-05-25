let grid;
let t = [];
t[2] = 5;
console.log(t[0]);

function setup() {
	createCanvas(1200,520);
	grid = new Grid(5,5);
}

function draw() {
	background(0);
	grid.display();
	ellipse(50, 50, 80, 80);
}