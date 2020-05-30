class Zombie extends Unit {

	constructor(hp,speed,i=-1,j=-1,damage=0) {
		super(hp,speed,i,j);
		self.damage = damage;
	}

	move() {
		this.x -= this.speed;	
	}

}