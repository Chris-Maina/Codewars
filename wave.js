/**
 * Introduction
 * The wave (known as the Mexican wave in the English-speaking world outside North America)
 * is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand,
 * yell, and raise their arms. Immediately upon stretching to full height,
 * the spectator returns to the usual seated position.
 *
 * Your task is to create a function that turns a string into a Mexican Wave.
 * You will be passed a string and you must return that string in an array where an uppercase
 * letter is a person standing up.
 * Example: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 *
 * @param {String} text
 */

function wave(text) {
  const waveArray = [];
  text.split("").map((letter, index) => {
    if (!letter.trim()) return;
    const changedString =
      text.substr(0, index) +
      letter.toUpperCase() +
      text.substr(index + letter.length);
    waveArray.push(changedString);
  });
  return waveArray;
}
