class PlantWrapper {

	constructor() {
		this.plants = [];
	}

	addPlant(unit) {
		if(unit != null) append(this.plants, unit);		
	}

	checkOccupation(unit) {
		for (var i = 0; i < this.plants.length; i++) { 
			if(this.plants[i].x == unit.x && this.plants[i].y == unit.y) return true;
		}

		return false;	
	}

	shoot() {

		let bullets = [];

		for (var i = 0; i < this.plants.length; i++) { 
			let bullet = this.plants[i].shoot();
			if(bullet != null) append(bullets, bullet);
		}

		return bullets;
	}

	genSun() {

		let total = 0;

		for (var i = 0; i < this.plants.length; i++) { 
			if(this.plants[i] instanceof SunFlower) {
				total += this.plants[i].genSun();
			}
		}

		return total;
		
	}

	draw() {
		for (var i = 0; i < this.plants.length; i++) { 
			this.plants[i].draw();
		}
	}

}