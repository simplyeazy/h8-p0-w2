//==============================Tugas 1=======================//
function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut());
//===============================Tugas 2======================//
var num1 = 5;
var num2 = 6;
function calculateMultiply(number1, number2) {
    return number1 * number2;
}

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

//================================Tugas 3=====================//
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(nama, umur, alamat, hobi) {
    return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`;
}
var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
//============================================================//