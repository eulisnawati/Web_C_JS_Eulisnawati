
let lapar = true; // Jika lapar adalah true, Anda perlu masak.
let punyaWaktu = true; // Jika punya waktu adalah true, Anda bisa masak.
let punyaBahan = true; // Jika punya bahan adalah true, Anda punya bahan untuk masak.

if (lapar) {
  // Jika lapar adalah true
  if (punyaWaktu && punyaBahan) {
    // Jika punya waktu dan punya bahan, Anda bisa masak.
    console.log("Anda lapar dan punya waktu serta bahan untuk masak. Silakan masak makanan favorit Anda.");
  } else if (punyaWaktu) {
    // Jika punya waktu tapi tidak punya bahan, Anda bisa pesan makanan.
    console.log("Anda lapar, punya waktu, tapi tidak punya bahan. Anda bisa pesan makanan.");
  } else {
    // Jika tidak punya waktu, Anda bisa makan di luar.
    console.log("Anda lapar tetapi tidak punya waktu untuk masak. Anda bisa makan di luar.");
  }
} else {
  // Jika lapar adalah false
  console.log("Anda tidak lapar. Tidak perlu masak sekarang.");
}





@* While *@
let count = 0;
while (count < 5) {
  console.log("Anda telah membaca syahadat sebanyak" + (count + 1));
  count++;
}


@* dowhile  *@
let angka = 1;
do {
  console.log("Kamar kost kosong nomor " + angka);
  angka++;
} while (angka <= 5);

// Contoh program JavaScript dengan function
function tambah(a, b) {
  return a + b;
}

let hasilTambah = tambah(3, 5);
console.log("Kamar yang penuh " + hasilTambah);

@* fungsi *@
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


@* statement *@
for (let i = 1; i <= 5; i++) {
  console.log("Hari sekarang anda sudah terjatu yang ke -" + i);
}


@* switch *@
