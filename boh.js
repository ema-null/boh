var convTo = function convertTo(num, base){
	var n = num%base;

	switch(n){
		case 10: return 'A';
		case 11: return 'B';
		case 12: return 'C';
		case 13: return 'D';
		case 14: return 'E';
		case 15: return 'F';
	}

	return n.toString();
}

function toBin(num){
	var base = 2;

	var n='';
	do{
		n = convTo(num, base)+n;
		num/=base;
		num = parseInt(num);
	}while(num>(base-1));
	
	n = convTo(num, base)+n;

	return n;
}

function toOct(num){
	var base = 8;

	var n='';
	do{
		n = convTo(num, base)+n;
		num/=base;
		num = parseInt(num);
	}while(num>(base-1));
	
	n = convTo(num, base)+n;

	return n;
}

function toHex(num){
	var base = 16;

	var n='';
	do{
		n = convTo(num, base)+n;
		num/=base;
		num = parseInt(num);
	}while(num>(base-1));
	
	n = convTo(num, base)+n;

	return n;
}

module.exports = {toBin,toOct,toHex};