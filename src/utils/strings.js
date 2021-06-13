const replaceSpecialCharacters = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const findDifferences = (input, expected, strictMode = false) => {
  if (!strictMode) {
    input = replaceSpecialCharacters(input);
    expected = replaceSpecialCharacters(expected);
  }
  let diffs = [];
  expected.split(" ").forEach(function (expectedWord, i) {
    const inputWord = input.split(" ")[i];
    if (expectedWord !== inputWord) {
      diffs.push(expectedWord);
    }
  });
  return diffs;
};
