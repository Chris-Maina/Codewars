/**
 * Convert seconds to HH:MM:SS
 */
secondsToHMS = (seconds) => {
  const positive = parseInt(seconds, 10);
  let h = Math.floor(positive/3600);
  let m = Math.floor(positive % 3600 / 60);
  let s = Math.floor(positive % 3600 % 60);
  if (h < 10 ) { h = `0${h}`};
  if (m < 10 ) { m = `0${m}`};
  if (s < 10 ) { s = `0${s}`};
  return `${h}:${m}:${s}`;
}