
/*
The aim of this class is to control all the bullets in game.
It adds all bullets to an array and move all of then. 
*/
class BulletWrapper {

	constructor() {
		this.bullets = [];
	}

	// the Parameter is an array of bullets created by the class PlantWrapper
	addBullet(bullet) {
		for (var i = 0; i < bullet.length; i++) {
			append(this.bullets, bullet[i]);
		}
	}	

	move() {
		for (var i = 0; i < this.bullets.length; i++) { 
			this.bullets[i].move();
			
			if(this.bullets[i].x > width) {
				delete this.bullets[i];
				this.bullets.splice(i,1);
			}
		}
	}

	draw() {
		for (var i = 0; i < this.bullets.length; i++) 
			this.bullets[i].draw();
	}

}