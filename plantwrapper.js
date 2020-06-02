class PlantWrapper {

	constructor() {
		this.plants = [];
	}

	addPlant(unit) {
		if(unit != null) append(this.plants, unit);
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