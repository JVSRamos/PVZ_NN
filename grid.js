class Grid {

	constructor(nrows, ncols){
		this.map = []
		for(let i = 0; i < nrows;i++) {
			map[i] = [];
		}
		this.nrows = nrows;
		this.ncols = ncols;
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
	}



}