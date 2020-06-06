class CollisionDetector {

	constructor(plants,zombies) {
		this.plants = plants;
		this.zombies = zombies; 
	}

	detectCollision() {

		// looks quite confusing, because I am acessing the attribute plants from
		// the class plants. The same for the zombies 
		var plants = this.plants.plants;
		var zombies = this.zombies.zombies;

		// detecting plants collision
		for (var i = 0; i < plants.length; i++) { 
			for (var j = 0; j < zombies.length; j++) { 
				if(plants[i].x+(plants[i].width/2) == zombies[j].x-(zombies[j].width/2)) {
					zombies[j].attacking = true;
					plants[i].hp -= zombies[j].damage;
					if(plants[i].hp == 0) {
						delete plants[i];
						plants.splice(i,1);
					}
				}
			}	
		}
	}



}