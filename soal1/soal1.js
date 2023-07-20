function generateSequence(n) {
  let sequence = [];
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sequence.push(sum);
    sum += i;
  }
  return sequence.join("-");
}

// Fungi Input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Masukkan angka: ", (input) => {
  try {
    const number = parseInt(input);
    if (isNaN(number) || number < 1) {
      throw new Error("Masukkan angka yang valid (angka bulat positif)!");
    } else {
      const output = generateSequence(number);
      console.log("Output:", output);
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  } finally {
    readline.close();
  }
});
