/*
Attributes:
	hp: Life of the unit
	speed: Speed of the unit
	i: Row position on the grid
	j: Column position on the grid
	cadence: Frequency of the shoot (bullets per frame)
	b_dam: Dammage of the produced bullet
	b_speed: Speed of the bullet (pixels per frame)
	birth_time: Frame value of the object creation 

	OBS: i and j are the initial position of the unit on the grid, but they are 
	stored as ,after a conversion, (x,y), the absolute position on the canvas.

*/
class Plant extends Unit {

	constructor(hp,speed,i=-1,j=-1,cadence=0.01,b_speed=2, b_dam=1, curFrame=frameCount) {
		super(hp,speed,i,j);
		this.cadence = cadence;
		this.birth_time = curFrame;
		this.b_dam = b_dam;
		this.b_speed = b_speed;
	}	

	shoot() {
		// shoots at every 1/cadence frames
		if(((frameCount - this.birth_time)%(1/this.cadence)) == 0) {
			let bullet = new Bullet(this.b_dam, this.x, this.y, this.b_speed);
			return bullet;	
		}

		return null;
	}

}