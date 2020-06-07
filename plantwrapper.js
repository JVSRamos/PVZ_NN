class PlantWrapper {

	constructor() {
		this.plants = [];
	}

	addPlant(unit) {
		// check if the place is occupied
		let occupied = false;
		for (var i = 0; i < this.plants.length; i++) { 
			if(this.plants[i].x == unit.x && this.plants[i].y == unit.y) occupied = true;
		}	

		if((unit != null) && !occupied) append(this.plants, unit);	
	}

	shoot() {

		let bullets = [];

		for (var i = 0; i < this.plants.length; i++) { 
			let bullet = this.plants[i].shoot();
			if(bullet != null) append(bullets, bullet);
		}

		return bullets;
	}

	draw() {
		for (var i = 0; i < this.plants.length; i++) { 
			this.plants[i].draw();
		}
	}

}