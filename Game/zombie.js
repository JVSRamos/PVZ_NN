class Zombie extends Unit {

	constructor(hp,speed,i=-1,j=-1,damage=1,w=80,l=80) {
		super(hp,speed,i,j,w,l);
		this.damage = damage;
		this.attacking = false;
	}

	move() {
		if(this.attacking == false) this.x -= this.speed;	
	}
}