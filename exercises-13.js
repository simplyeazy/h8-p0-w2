function xo(str) {
	let numX = 0;
	let numY = 0;
	for (let counter = 0; counter <= str.length; counter++) {
		if (str[counter] === 'x') {
			numX = numX + 1;
		}
		if (str[counter] === 'o') {
			numY++;
		}
	}
	if (numX === numY) {
		return true;
	} else {
		return false;
	}
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
