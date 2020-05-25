class Unit {

	constructor(hp,velocity,i,j){
		this.hp = hp;
		this.velocity = velocity;
		this.i = i;
		this.j = j;
	}

	draw() {
		let [x,y] = this.getCenter();
		ellipse(x, y, 80, 80);
	}

	getCenter(){
		return grid.getCellCenter(this.i,this.j);
	}


}