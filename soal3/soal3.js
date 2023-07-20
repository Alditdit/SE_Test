function isBalancedBracket(str) {
  const stack = [];
  const openingBrackets = new Set(['(', '[', '{']);
  const closingBrackets = new Set([')', ']', '}']);
  const matchingBrackets = { '(': ')', '[': ']', '{': '}' };

  for (const char of str) {
    if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      const lastOpeningBracket = stack.pop();
      if (!lastOpeningBracket || matchingBrackets[lastOpeningBracket] !== char) {
        return 'NO';
      }
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

// Contoh penggunaan fungsi
const sample1 = '{[()]}';
const sample2 = '{[(])}';
const sample3 = '{(([])[])[]}';

console.log("Sampel 1:", isBalancedBracket(sample1)); // Output: YES
console.log("Sampel 2:", isBalancedBracket(sample2)); // Output: NO
console.log("Sampel 3:", isBalancedBracket(sample3)); // Output: YES
