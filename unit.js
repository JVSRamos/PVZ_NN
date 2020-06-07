class Unit {

	constructor(hp=10,speed=0,i=-1,j=-1,w=80,l=80){
		this.hp = hp;
		this.speed = speed;

		let [x,y] = this.getCenter(i,j);
		this.x = x;
		this.y = y;
		this.width = w;
		this.length = l;
	}

	draw() {
		let c = color(0, 0, 0);
		fill(c);
		ellipse(this.x, this.y, this.width, this.length);
	}

	getCenter(i,j) {
		return grid.getCellCenter(i,j);
	}

	setCoordenates(i,j) {
		let [x,y] = this.getCenter(i,j);
		this.x = x;
		this.y = y;
	}
	
}