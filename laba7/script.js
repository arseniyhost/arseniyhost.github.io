let acc = Math.pow(10, -4);

const F = (x) => {
	return  Math.cos(3 * x) - Math.sin(x) - 0.1;
}

let min = -(Math.PI / 2);
let max = (Math.PI / 2);

let length = max - min;
let x = 0;
let err = length;


while(err > acc &&  F(x) != 0) {
	x = (min + max) / 2;
	if(F(min) * F(x) < 0) {
		max = x;
	} else if(F(x) * F(max) < 0)
	{
		min = x;
	}
	
	err = (max - min)/length;
}

const p2 = document.createElement("p");
p2.innerHTML = `x =  ${x.toFixed(3)}`;

const p = document.createElement("p");
p.innerHTML = `e  = ${acc}`;

const div = document.createElement("div");
div.append(p);
div.append(p2);

document.body.append(div);




