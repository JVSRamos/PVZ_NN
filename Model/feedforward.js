class FeedForward() {

	constructor(W,b) {
		this.W = W;
		this.b = b;
	}

	forward(x) {
		return addVet(mulMatVet(this.W,v)this.b);
	}

}