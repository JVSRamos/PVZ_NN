
/*
The aim of this class is to control all the bullets in game.
It adds all bullets to an array and move all of then. 
*/
class BulletWrapper {

	constructor() {
		this.bullets = [];
	}

	addBullet(bullet) {
		if(bullet != null) append(this.bullets, bullet);
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