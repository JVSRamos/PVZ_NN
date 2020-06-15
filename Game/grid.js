class Grid {

	constructor(nrows=ROWS, ncols=COLS, sunrate=SUNRATE, sunval=SUNVAL){
		this.sun = 0;
		this.sunrate = sunrate;
		this.sunval= sunval;

		this.bullets = new BulletWrapper();
		this.plants = new PlantWrapper();
		this.zombies = new ZombieWrapper();
		this.cd = new CollisionDetector(this.plants,this.zombies,this.bullets);

		this.nrows = nrows;
		this.ncols = ncols;
		this.rect_width = width/ncols;
		this.rect_height = height/nrows;
	}

	generateSun() {
		if(frameCount%this.sunrate == 0) {
			this.sun += this.sunval;
		}
	}

	move() {
		this.generateSun();
		this.sun += this.plants.genSun();
		let volley = this.plants.shoot();
		this.cd.detectCollision();
		this.zombies.move();
		this.bullets.addBullet(volley);
		this.bullets.move();
		
	}

	draw() {
		for(let i = 1; i <= this.nrows;i++) {
			let y = height/this.nrows;
			line(0,y*i,width,y*i);
			stroke(255);
		}

		for(let i = 1; i <= this.ncols;i++) {
			let x = width/this.ncols;
			line(x*i,0,x*i,height);
			stroke(255);
		}

		this.plants.draw();
		this.zombies.draw();
		this.bullets.draw();

	}

	// Gets the center (x,y) from a cell coordenate
	getCellCenter(i,j) {

		let x = (i+1/2)*this.rect_width;
		let y = (j+1/2)*this.rect_height;

		return [x,y];
	}

	getGridPos(x,y) {
		let i = floor((x/width)*this.ncols);
		let j = floor((y/height)*this.nrows);

		return [i,j];
	}

	// May be deprecated later
	addUnitToCell(unit,i,j){
		this.unit_map[i][j] = unit;
		unit.setCoordenates(i,j);
	}

	addUnit(unit) {
		if(unit instanceof Plant) this.plants.addPlant(unit);
		if(unit instanceof Zombie) this.zombies.addZombie(unit);
	}


}