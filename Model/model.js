/*
Attributes:
	
*/
class Encoder {

	constructor(input_dim=5,attention_dim=5,plants_dim=NPLANTS,pos_dim=ROWS*COLS) {
		this.input_dim = input_dim;
		this.attention_dim = attention_dim;
		this.plants_dim = plants_dim;
		this.pos_dim = pos_dim;

		this.Wattention = [];
		this.Wplants = [];
		this.Wpos = [];

		this.init();
	}

	init() {
		for(var i = 0; i < this.attention_dim; i++) {
			this.Wattention[i] = Array.from({length: this.input_dim}, () => (Math.random()));
		}
		for(var i = 0; i < this.plants_dim; i++) {
			this.Wattention[i] = Array.from({length: this.attention_dim}, () => (Math.random()));
		}
		for(var i = 0; i < this.pos_dim; i++) {
			this.Wattention[i] = Array.from({length: this.plants_dim+this.attention_dim}, () => (Math.random()));
		}

	}

	softmax(x) {
		let x_out = [];
		let den = 0;

		for(var i = 0; i < x.length; i++) {
			den += Math.exp(x[i]);
		}

		for(var i = 0; i < x.length; i++) {
			x_out[i] = Math.exp(x[i])/den;
		}

		return x_out;
	}

	dot(a,b) {

		let result = 0;
		for(var i = 0; i < a.length; i++) {
			result += a[i]*b[i];
		}
		return result;
		
	}


	self_attention(x) {

		let score = [];
		let x_new = [];

		for(var i = 0; i < x.length; i++) {
			x_new[i] = new Array(x[i].length).fill(0);
		}

		for(var i = 0; i < x.length; i++) {
			for(var j = 0; j < x.length; j++) {
				score[j] = this.dot(x[i],x[j]);		
			}

			score = this.softmax(score);

			for(var k = 0; k < x.length; k++) {
				//x_new[i] += score[k]*x[k];
				for(var w = 0; w < x[k].length; w++) {
					x_new[i][w] += x[k][w]*score[k];
				}
			}
		}

		return x_new;

	}

	// x is a vector containing for each position a vector representing a zombie or a plant
	forward(x) {

		x = this.self_attention(x);
		console.log(x);

	}

}