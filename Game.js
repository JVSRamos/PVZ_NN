/*
Attributes:
	sunrate: time period between getting sun points	
	sunval: the value of getting one unit of sun
*/
class Game {

	constructor(grid,sunrate=30,sunval=1,nrows=5,ncols=5) {
		this.sun = 0;
		this.sunrate = sunrate;
		this.sunval= sunval;
		this.grid = grid;
	}

	generateSun() {
		if(frameCount%this.sunrate == 0) {
			this.sun += this.sunval;
		}
	}

	addPlant() {
		let plant = new Plant(10,0);
		if(mouseIsPressed && this.sun >= plant.cost) {
			this.sun -= plant.cost;
			let valueX = mouseX; 
	    	let valueY = mouseY; 
	    	let i,j;
	    	[i,j] = this.grid.getGridPos(valueX,valueY);
	    	console.log(i);
	    	console.log(j);
	    	plant.setCoordenates(i,j);
	    	this.grid.addUnit(plant);		
		}
		
	}

	endGame() {
		// It looks ugly, maybe there's other ways of doing that
		var zombies = this.grid.zombies.zombies;
		for (var i = 0; i < zombies.length; i++) {
			if(zombies[i].x <= 0) return true;
		}
		return false;
	} 

	play(display=true) {
		if (!this.endGame()) {
			this.addPlant();
			this.generateSun();
			this.grid.move();
			if(display) {
				this.grid.draw();
				textSize(25);
				text("sun = "+this.sun,10,25);
			}
		}
	}
	
}
