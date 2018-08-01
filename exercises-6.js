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
//===========================3. Angka Ganjil dan Genap====================================//
for(let counter=1; counter<=100; counter++){
    if(counter%2===0){
      console.log("GENAP");
    }
    else{
      console.log("GANJIL");
    }
  }
  
  // for(let counter=1; counter<=100;counter+2){
  // if(counter/)
  // }
  // for(let counter=1; counter<=100;counter+5){
  
  // }
  // for(let counter=1; counter<=100;counter+9){
  
  // }