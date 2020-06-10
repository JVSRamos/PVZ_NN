// I might do another class CollisionResolver
class CollisionDetector {

	constructor(plants,zombies,bullets) {
		this.plants = plants;
		this.zombies = zombies; 
		this.bullets = bullets;
	}

	checkPZCollision(plant, zombie) {

		let lbound = plant.x-(plant.width/2);
		let rbound = plant.x+(plant.width/2);
		let attackpoint = zombie.x-(zombie.width/2);

		if((attackpoint <= rbound && attackpoint >= lbound) && plant.y == zombie.y)
			return true;
		return false;
	}


	detectCollision() {

		// looks quite confusing, because I am acessing the attribute plants from
		// the class plants. The same for the zombies and the bullets 
		var plants = this.plants.plants;
		var zombies = this.zombies.zombies;
		var bullets = this.bullets.bullets;

		// detecting plants collision
		for (var i = 0; i < plants.length; i++) { 
			for (var j = 0; j < zombies.length; j++) { 
				if(this.checkPZCollision(plants[i],zombies[j])) {

					//(this.combat.get(plant[i])).add(zombies[j]);
					zombies[j].attacking = true;
					plants[i].hp -= zombies[j].damage;
					if(plants[i].hp == 0) {
						delete plants[i];
						plants.splice(i,1);
						zombies[j].attacking = false;
						// don't need to check if other zombies are attacking that plant
						break;
					}
				}
			}	
		}

		// WARNING: may have a bug when deleting a bullet when hit a zombie and getting out of the screen
		for (var i = 0; i < zombies.length; i++) { 
			for (var j = 0; j < bullets.length; j++) { 		
				if((zombies[i].x-(zombies[i].width/2) <= bullets[j].x) && zombies[i].y == bullets[j].y) {
					zombies[i].hp -= bullets[j].damage;
					delete bullets[j];
					bullets.splice(j,1);
					if(zombies[i].hp == 0) {
						delete zombies[i];
						zombies.splice(i,1);
						break;
					}
				}
			}	
		}

	}

}