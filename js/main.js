//vars and other important stuff
var fundamental = ['Bb','A','Ab','G','F#','F','E'];
var BaseFreq = [58.27,55,51.91,49,46.25,43.65,41.2];
var position;
var partial;
var PartialFreq = partial * BaseFreq[position-1]; 

//Messy but I really dont care
var pain = (Math.abs(Math.floor(PartialFreq-174.61)/100)+1;

function octave(PartialFreq)
{
  var octavenum;
  /*
  First if statement is ridiculous and absolutly unnessary, which is why I put it there.
  
 Also, I'm only using a million if fuctions cause im too lazy to find the equation for the frequency distribution of octaves and actually implement it.
 btw: The distribution is a ratio of 2:1, but im not putting it in cause im too lazy.
  */
  if (PartialFreq >= 4.09 && PartialFreq < 8.18)
  {
    octavenum = -2;
  }
  else if (PartialFreq >= 8.18 && PartialFreq < 16.35)
  {
    octavenum = -1;
  }
  else if (PartialFreq >= 16.35 && PartialFreq < 32.7)
  {
    octavenum = 0;
  }
  else if (PartialFreq >= 32.7 && PartialFreq < 65.41)
  {
    octavenum = 1;
  }
  else if (PartialFreq >= 65.41 && PartialFreq < 130.81)
  {
    octavenum = 2;
  }
  else if (PartialFreq >= 130.81 && PartialFreq < 261.63)
  {
    octavenum = 3;
  }
  else if (PartialFreq >= 261.63 && PartialFreq < 523.25)
  {
    octavenum = 4;
  }
  else if (PartialFreq >= 523.25 && PartialFreq < 1046.5)
  {
    octavenum = 5;
  }
  //after this point, just play the flute and/or go to the hospital.
  
  
  //                   Hey look its a whole number |
  //                                               v
  else if (PartialFreq >= 1046.5 && PartialFreq < 2093)
  {
    octavenum = 6;
  }
  else if (PartialFreq >= 2093 && PartialFreq < 4186)
  {
    octavenum = 7;
  }
  //else (go back to later cause I dont want to do this error thingie now)
  
}


