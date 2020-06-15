class SunFlower extends Plant {

	constructor(hp=PLANTS.sunflower.hp,speed=0,cadence=PLANTS.sunflower.cadence,i=-1,j=-1,b_speed=0, b_dam=0, w=80,l=80, cost=PLANTS.sunflower.cost, sunval=PLANTS.sunflower.sunval) {
		super(hp,speed,cadence,i,j,b_speed,b_dam,w,l,cost);
		this.sunval = sunval;
	}

	shoot() {
		return null;
	}

	genSun() {
		if(((frameCount-this.birth_time+1)%(1/this.cadence)) == 0) {
			return this.sunval; 
		}
		return 0;
	}

}