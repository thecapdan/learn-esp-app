const stripSpecialCharacter = (str) => {
  return str.replace(/[^a-zA-Záéíóñ ]/g, "");
};

export const findDifferences = (input, expected, isStrict = false) => {
  input = stripSpecialCharacter(input);
  expected = stripSpecialCharacter(expected);
  let diffs = [];
  expected.split(" ").forEach(function (expectedWord, i) {
    let inputWord = input.split(" ")[i];
    if (expectedWord !== inputWord) {
      diffs.push(expectedWord);
    }
  });
  return diffs;
};
