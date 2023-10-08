// Fungsi untuk menentukan jenis olahraga berdasarkan usia
function tentukanOlahraga(usia) {
  if (usia < 5) {
    return "Terlalu muda untuk olahraga.";
  } else if (usia >= 5 && usia < 18) {
    return "Anda sebaiknya bermain olahraga seperti sepak bola atau basket.";
  } else if (usia >= 18 && usia < 40) {
    return "Anda dapat mencoba berbagai olahraga seperti jogging atau fitness.";
  } else {
    return "Anda mungkin ingin mencoba olahraga ringan seperti berenang atau yoga.";
  }
}
// Menggunakan fungsi untuk menentukan jenis olahraga
let usiaPemain = 25;
let jenisOlahraga = tentukanOlahraga(usiaPemain);

console.log("Berdasarkan usia Anda, Anda disarankan untuk: " + jenisOlahraga);
n;
