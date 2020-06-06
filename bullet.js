class Bullet {

	constructor(damage=1,x=-1,y=-1, speed=1) {
		this.damage = damage;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

	move() {
		this.x += this.speed;
	}

	setCoordenates(x,y) {
		this.x = x;
		this.y = y;
	}

	draw() {
		ellipse(this.x, this.y, 40, 40);
	}

}