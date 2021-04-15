const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch(moves[i]) {
    case 'north':
      y += 1;
      break;
    case 'south':
      y -= 1;
      break;
    case 'east':
      x += 1;
      break;
    case 'west':
      x -= 1;
      break;
    }
  }
  let final = [x, y];
  return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
console.log(finalPosition(moves));