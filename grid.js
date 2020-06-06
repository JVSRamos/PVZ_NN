class Grid {

	constructor(nrows, ncols){
		this.unit_map = [];

		// initialize the map of unities
		for(let i = 0; i < nrows;i++) {
			this.unit_map[i] = [];
			for(let j = 0; j < nrows;j++) {
				this.unit_map[i][j] = null;
			}
		}

		this.bullets = new BulletWrapper();
		this.plants = new PlantWrapper();
		this.zombies = new ZombieWrapper();
		this.cd = new CollisionDetector(this.plants,this.zombies,this.bullets);

		this.nrows = nrows;
		this.ncols = ncols;
		this.rect_width = width/ncols;
		this.rect_height = height/nrows;
	}

	display() {
		// TODO: Create a function for move and one for draw
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

		let volley = this.plants.shoot();
		this.plants.draw();

		this.zombies.move();
		this.zombies.draw();

		this.bullets.addBullet(volley);
		this.bullets.move();
		this.bullets.draw();

		this.cd.detectCollision();

	}

	// Gets the center (x,y) from a cell coordenate
	getCellCenter(i,j) {

		let x = (i+1/2)*this.rect_width;
		let y = (j+1/2)*this.rect_height;

		return [x,y];
	}

	// May be deprecated later
	addUnitToCell(unit,i,j){
		this.unit_map[i][j] = unit;
		unit.setCoordenates(i,j);
	}

	addUnit(unit) {
		if(unit instanceof Plant) this.plants.addPlant(unit);
		if(unit instanceof Zombie) this.zombies.addZombie(unit);

		// May be deleted
		this.unit_map[i][j] = unit;
	}


}