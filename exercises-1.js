//===============================================1. Newton Second Law==========================================//
var F;
var m=600;
var a=2;
F = m*a;
console.log(`${F} N`);

//Declare an F Variable
//Declare an m Variable and Initialise
//Declare an a variable and Initialise
//F = m x a 
//Print the output

//=================================================2. Tahun Kabisat===========================================//
var year;
for(var year=2000; year<=2100; year++){
if(year%4===0 && year%100!==0){
  // bawah ini ga kepake
  // if(year%4===0 && year%100===0 && year%400===0){
  //   console.log(`${year} is leap year`);
  // } 
  // atas ini ga kepake
 console.log(`${year} is leap year`);
}
console.log(`${year} is not leap year`)
}
//Declare a year Variable
//LOOP when year starts at 2000; year is less/equal from 2100; count up;
  //CHECK if year modulo 4 is 0 and year modulo 100 is not 0
  //IF above condition true, print year is leap year else year is not leap year

//======================================================3. Laundry Day========================================//

var counterPakaian;
for(counterPakaian=0; counterPakaian<=20; counterPakaian++){
  console.log(`${counterPakaian} pakaian dimasukan ke mesin cuci`);
}
console.log("mesin cuci hidup dan mencuci");
//Declare a counterpakaian Variable;
//LOOP when counterPakaian starts at 0; counterpakaian is less/equal from 20; count up
  //Print counterPakaian pakaian dimasukan ke mesin cuci
//Print mesin cuci hidup dan mencuci
//====================================================4. Periksa Kuku============================================//

var isStudentNailLong = [
  true, false, true, false,true,true, false, true, false,true,
true, false, true, false,true,true, false, true, false,true,
true, false, true, false,true,true, false, true, false,true,
true, false, true, false,true,true, false, true, false,true];
for(var counter=0; counter<=isStudentNailLong.length; counter++){
  if(isStudentNailLong[counter]===true){
    console.log(`cut student number ${counter}'s nails`);
  }
  else{
    console.log(`no cut`);
  }
}
//Declare isStudentNailLong Variable and initialise it with 40 random boolean value
//LOOP when counter starts at 0; counter is less/equal from amount of isStudentNailLong; count up;
//CHECK if each member of isStudentNailLong is true then print cut student number nails else no cut
//===============================================================================================================//