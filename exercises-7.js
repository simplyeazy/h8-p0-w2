//============================1. Menyusun Barisan Bintang===========================================//
var rows=5;
for(let counter=0; counter<=rows;counter++){
  console.log("*");
}
//============================2. Menyusun Barisan Bintang Dengan Nested Looping=====================//
var rows = 5;
var bintang = '';
for (let counter = 1; counter <= rows; counter++) {
	for (let counter2 = 1; counter2 <= rows; counter2++) {
		bintang += '*';
	}
	console.log(bintang);
	bintang = '';
}
//===========================3. Menyusun Barisan Tangga Bintang Dengan Nested Looping================//
var rows = 5;
var bintang="";
for(let counter=1; counter<=rows;counter++){
  bintang=bintang+"*";
  console.log(bintang);
}
//====================================================================================================//