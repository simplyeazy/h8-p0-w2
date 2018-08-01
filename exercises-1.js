//===============================================1. Newton Second Law==========================================//
var F;
var m=600;
var a=2;
F = m*a;
console.log(`${F} N`);
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

//======================================================3. Laundry Day========================================//

var counterPakaian;
for(counterPakaian=0; counterPakaian<=20; counterPakaian++){
  console.log(`${counterPakaian} pakaian dimasukan ke mesin cuci`);
}
console.log("mesin cuci hidup dan mencuci");

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
//===============================================================================================================//