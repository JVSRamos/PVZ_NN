class ZombieWrapper {

	constructor() {
		this.zombies = [];
	}

	addZombie(unit) {
		if(unit != null) append(this.zombies, unit);
	}

	move() {
		for (var i = 0; i < this.zombies.length; i++) { 
			this.zombies[i].move();
			// solves the problem of 2 zombies attacking a plant, and one stop walking when the plant dies
			// Later I will put a map on collisiondetector class. Then I don't need this line			
			this.zombies[i].attacking = false;
		}
	}

	draw() {
		for (var i = 0; i < this.zombies.length; i++) { 
			this.zombies[i].draw();
		}
	}

}