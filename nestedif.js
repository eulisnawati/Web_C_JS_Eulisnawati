let suhuTubuh = 38.5;
let batuk = false;
let pilek = true;

if (suhuTubuh >= 38) {
  // Jika suhu tubuh lebih dari atau sama dengan 38 derajat Celsius
  console.log("Anda memiliki demam.");

  if (batuk && pilek) {
    // Jika ada gejala batuk dan pilek
    console.log("Anda mungkin mengalami flu.");
  } else if (batuk || pilek) {
    // Jika hanya ada salah satu dari gejala batuk atau pilek
    console.log("Anda mungkin mengalami masalah pernapasan.");
  } else {
    console.log("Tidak ada gejala lain yang mencurigakan.");
  }
} else {
  console.log("Anda tidak memiliki demam.");
}
