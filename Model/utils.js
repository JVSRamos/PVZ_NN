function dot(a,b) {

	let result = 0;
	for(var i = 0; i < a.length; i++) {
		result += a[i]*b[i];
	}

	return result;		
}

function mulMatVet(m,v) {

	let result = [];

	for(var i = 0 ; i < m.length; i++) {
		result[i] = dot(m[i],v);
	}

	return result;
}

function addVet(a,b) {

	let c = [];

	for(var i = 0; i < a.length; i++) {
		c[i] = a[i]+b[i];
	}

	return c;
}
