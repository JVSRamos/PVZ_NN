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
			// maybe I will put the lose condition here
		}
	}

	draw() {
		for (var i = 0; i < this.zombies.length; i++) { 
			this.zombies[i].draw();
		}
	}

}