function konversiMenit(menit) {
	let hours = Math.floor(menit / 60);
	let minutes = menit % 60;
	//hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return `${hours}:${minutes}`;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
