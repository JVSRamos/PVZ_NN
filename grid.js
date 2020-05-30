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
		this.nrows = nrows;
		this.ncols = ncols;
		this.rect_width = width/ncols;
		this.rect_height = height/nrows;
	}

	display() {

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

		for (let i = 0; i < this.unit_map.length; i++) {
			for (let j = 0; j < this.unit_map[i].length; j++) {

				let cur_unit = this.unit_map[i][j];

				if(cur_unit) cur_unit.draw();
				// need to disengage the logic from the display
				if(cur_unit instanceof Plant) {

					let bullet = cur_unit.shoot();
					this.bullets.addBullet(bullet);
				}    
			}
		}	

		this.bullets.move();
		this.bullets.draw();

	}

	// Gets the center (x,y) from a cell coordenate
	getCellCenter(i,j) {

		let x = (i+1/2)*this.rect_width;
		let y = (j+1/2)*this.rect_height;

		return [x,y];
	}

	addUnitToCell(unit,i,j){
		this.unit_map[i][j] = unit;
		unit.setCoordenates(i,j);
	}


}