//===========================1. Melakukan Looping Menggunakan While==================================//
var counter = 0;
counter += 2;
console.log('LOOPING PERTAMA');
while (counter <= 20) {
	console.log(`${counter} - I love coding`);
	counter = counter + 2;
}
counter-=2;
console.log('LOOPING KEDUA');
while (counter >= 2) {
	console.log(`${counter} - I will become fullstack developer`);
	counter = counter - 2;
}
//===========================2. Melakukan Looping Menggunakan For====================================//
var counter;
console.log('LOOPING PERTAMA');
for(counter=1;counter<=20; counter++){
  console.log(`${counter} - I love coding`);

}
counter--;
console.log('LOOPING KEDUA');
for(counter-1; counter>=1; counter--){
  console.log(`${counter} - I will become fullstack developer`);
}
//===========================3. Angka Ganjil dan Genap===============================================//
console.log("LOOP GANJIL GENAP");
for (let counter = 1; counter <= 100; counter++) {
	if (counter % 2 === 0) {
		console.log('GENAP');
	} else {
		console.log('GANJIL');
	}
}
console.log("LOOP 1");
var kelipatan3 = 3;
for (let counter = 1; counter <= 100; counter += 2) {
	if (counter % kelipatan3 === 0) {
		console.log(`${counter} KELIPATAN ${kelipatan3}`);
	}
}
console.log("LOOP 2");
var kelipatan6 = 6;
for (let counter = 1; counter <= 100; counter += 5) {
	if (counter % kelipatan6 === 0) {
		console.log(`${counter} KELIPATAN ${kelipatan6}`);
	}
}
console.log("LOOP 3");
var kelipatan10 = 10;
for (let counter = 1; counter <= 100; counter += 9) {
	if (counter % kelipatan10 === 0) {
		console.log(`${counter} KELIPATAN ${kelipatan10}`);
	}
}