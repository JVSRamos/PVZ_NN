/*
Attributes:
	
*/
class Encoder {

	constructor(input_dim=2,attention_dim=5,plants_dim=NPLANTS+1,pos_dim=ROWS*COLS) {
		this.input_dim = input_dim;
		this.attention_dim = attention_dim;
		this.plants_dim = plants_dim;
		this.pos_dim = pos_dim;

		this.Wattention = [];
		this.Wplants = [];
		this.Wpos = [];
		this.Battention = [];
		this.Bplants = [];
		this.Bpos = [];

		this.init();
	}

	init() {

		for(var i = 0; i < this.attention_dim; i++) {
			this.Wattention[i] = Array.from({length: this.input_dim}, () => (Math.random()));
		}
		for(var i = 0; i < this.plants_dim; i++) {
			this.Wplants[i] = Array.from({length: this.attention_dim}, () => (Math.random()));
		}
		for(var i = 0; i < this.pos_dim; i++) {
			this.Wpos[i] = Array.from({length: this.plants_dim+this.attention_dim}, () => (Math.random()));
		}

		this.Battention = Array.from({length: this.attention_dim}, () => (Math.random()));	
		this.Bplants = Array.from({length: this.plants_dim}, () => (Math.random()));	
		this.Bpos = Array.from({length: this.pos_dim}, () => (Math.random()));	

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

	self_attention(x) {

		let score = [];
		let x_new = [];

		for(var i = 0; i < x.length; i++) {
			x_new[i] = new Array(x[i].length).fill(0);
		}

		for(var i = 0; i < x.length; i++) {
			for(var j = 0; j < x.length; j++) {
				score[j] = dot(x[i],x[j]);		
			}

			//score = this.softmax(score);

			for(var k = 0; k < x.length; k++) {
				//x_new[i] += score[k]*x[k];
				for(var w = 0; w < x[k].length; w++) {
					x_new[i][w] += x[k][w]*score[k];
				}
			}
		}

		return x_new;

	}

	feedForward(x,W,b) {
		return addVet(mulMatVet(W,x),b);
	}

	// x is a vector containing for each position a vector representing a zombie or a plant
	forward(x) {

		x = this.self_attention(x);

		let out_attention = [];

		for(var i = 0; i < this.attention_dim;i++) {
			out_attention[i] = 0;
		} 

		for(var i = 0; i < x.length; i++) {
			out_attention = addVet(this.feedForward(x[i],this.Wattention,this.Battention),out_attention);
		}

		let plant_choice = this.feedForward(out_attention,this.Wplants,this.Bplants);	

		let pos_x = plant_choice.concat(out_attention);
		let pos_choice = this.feedForward(pos_x,this.Wpos,this.Bpos);

		pos_choice = this.softmax(pos_choice);
		plant_choice = this.softmax(plant_choice);

		let pos = getIndexMax(pos_choice);		
		let plant = getIndexMax(plant_choice);		

		return [plant,posVetToMatrix(pos)];

	}

}