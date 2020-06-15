// maybe change later
let end = false;
let win;

/*
Attributes:
	sunrate: time period between getting sun points	
	sunval: the value of getting one unit of sun
	gametime: last frame to spawn zombies
*/
class Game {

	constructor(grid,gametime=GAMETIME,nrows=ROWS,ncols=COLS) {
		this.grid = grid;
		// Change later if grid is added inside this class
		this.nrows = nrows;
		this.ncols = ncols;
		this.gametime = gametime;
	}

	xsenx(x) {
		let y = 0.2*x*Math.sin(x);
		if(y < 0) return -1*y;
		return y;
	}

	wave1(x,p) {
		if(x >= 1+p && x <= 7+p) return 1;
		else if(x > 7+p && x <= 10+p) return 2;
		
	}

	/*
		Generates zombies based on a function passed as argument and 
		adds a random coeficient between [-beta/2,beta/2], the amount of 
		that coeficient added to the function is controlled by the parameter alpha.
		The greater the alpha, more randomness is given to the result.   
	*/
	GenNumZombies(time,func=this.const,alpha=0,beta=1) {

		let r = (Math.random()*(2*beta))-beta;
		let num_zombies = alpha*r + (1-alpha)*func(time);

		return Math.ceil(num_zombies);
	}

	SpawnZombies(time,func=this.xsenx,alpha=0,beta=1) {

		let num_zombies = this.GenNumZombies(time,func,alpha,beta);
		let wave = [];

		while(num_zombies--) {
			let row = Math.floor(Math.random()*this.nrows);
			append(wave, new Zombie(ZOMBIES.normal.hp,ZOMBIES.normal.speed,this.ncols-1,row));
		}

		return wave;
	}

	// BUG: try to add plant on occupied space costs sun
	addPlant() {
		//let plant = new Plant(PLANTS.normal.hp,PLANTS.normal.speed,PLANTS.normal.cadence);
		let plant = new SunFlower();
		if(mouseIsPressed && this.grid.sun >= plant.cost) {
			this.grid.sun -= plant.cost;
			let valueX = mouseX; 
	    	let valueY = mouseY; 
	    	let i,j;
	    	[i,j] = this.grid.getGridPos(valueX,valueY);
	    	plant.setCoordenates(i,j);
	    	this.grid.addUnit(plant);		
		}
		
	}

	// The return is of the format [endOfGame,win]
	endGame() {
		// It looks ugly, maybe there's other ways of doing that
		var zombies = this.grid.zombies.zombies;
		for (var i = 0; i < zombies.length; i++) {
			if(zombies[i].x <= 0) return [true,false];
		}

		if(frameCount >= this.gametime && zombies.length == 0) return [true,true];
		return [false,false];
	} 

	play(display=true) {
		if (!end) {
			[end,win] = this.endGame();

			// Testing
			if(frameCount%100 == 0 && frameCount < this.gametime) {
				let wave = this.SpawnZombies(2*(frameCount/60));
				for (var i = 0; i < wave.length; i++) {
					this.grid.addUnit(wave[i]);
				}
			}

			this.addPlant();
			this.grid.move();
			if(display) {
				this.grid.draw();
				textSize(25);
				text("sun = "+this.grid.sun,10,25);
			}
		}
	}
	
}
