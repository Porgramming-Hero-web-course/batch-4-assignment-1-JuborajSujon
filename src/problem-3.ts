{
  //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  // function define
  function countWordOccurrences(sentence: string, word: string): number {
    const words: string[] = sentence
      .replace(/[.,!?]/g, "")
      .toLowerCase()
      .split(" ");
    const wordInLowerCase: string = word.toLowerCase();
    const count = words.filter((item: string) => item === wordInLowerCase);
    return count.length;
  }

  // function call
  const result: number = countWordOccurrences(
    "I love typescript",
    "typescript"
  );

  console.log(result);

  //
}
