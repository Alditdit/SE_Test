function denseRanking(scores, gitsScores) {
  // Menghapus nilai duplikat dari array skor dan mengurutkannya dari besar ke kecil
  const sortedScores = [...new Set(scores)].sort((a, b) => b - a);

  // Inisialisasi array untuk menyimpan hasil ranking
  const rankings = [];

  // Fungsi untuk menentukan ranking berdasarkan skor
  function getRanking(score) {
    for (let i = 0; i < sortedScores.length; i++) {
      if (score >= sortedScores[i]) {
        return i + 1;
      }
    }
    return sortedScores.length + 1;
  }

  // Menyimpan ranking untuk setiap skor GITS
  for (const gitsScore of gitsScores) {
    rankings.push(getRanking(gitsScore));
  }

  return rankings;
}

// Contoh penggunaan fungsi
const scores = [100, 100, 50, 40, 40, 20, 10];
const gitsScores = [5, 25, 50, 120];
const result = denseRanking(scores, gitsScores);
console.log(result); // Output: [6, 4, 2, 1]
