//vars and other important stuff
var A = 440; // tuning, I think I'm funny and clever (get it: A = 440? eh? no one? ok, I'll stop)

// key = note name, value = semitones above A. If you want, I can golf this down a lot, but I like it best as a lookup table.
// used by routines
var semitones = {
   'A': 0,
  'Bb': 1,
  'A#': 1,
  'B': 2,
  'C': 3,
  'Db': 4,
  'C#': 4,
  'D': 5,
  'Eb': 6,
  'D#': 6,
  'E': 7,
  'F': 8,
  'Gb': 9,
  'F#': 9,
  'G': 10,
  'Ab': 11,
  'G#': 11
}

var fundamental = ['Bb','A','Ab','G','F#','F','E'];
var baseFreq = fundamental.map(note=>freq(note, 1)) // avoid magic numbers!
var position = 1, partial = 1;
var partialFreq = partial * baseFreq[position-1];

//Messy but I really dont care
var pain = Math.abs(Math.floor(partialFreq-174.61)/100)+1); // this makes no sense, what are you trying to do?

// freq: frequency of note
function octave(freq) {
  return  Math.floor(Math.log2(freq/16.35))
}

/*
note: something like 'C', 'Bb', 'F#', etc.
octave: octaves above A4
*/
function freq(note, octave) {
  var steps = (octave - 4) * 12 + semitones[note];
  return Math.round(A * Math.pow(Math.pow(2,1/12),steps),9) // rounding to get rid of those darn floating point errors :)
}
