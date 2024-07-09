enum Direction {
  Up,
  Down,
  Right,
  Left,
}

function move(direction: any) {
  console.log(`Moving ${Direction[direction].toLowerCase()}`);
}

move(Direction.Left);
