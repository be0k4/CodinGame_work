declare const readline: () => string;

var inputs: string[] = readline().split(' ');
const lightX: number = parseInt(inputs[0]); // the X position of the light of power
const lightY: number = parseInt(inputs[1]); // the Y position of the light of power
const initialTx: number = parseInt(inputs[2]); // Thor's starting X position
const initialTy: number = parseInt(inputs[3]); // Thor's starting Y position

//トールの現在地を保持する変数
let currentX: number = initialTx;
let currentY: number = initialTy;

//方角
let directionX: string = '';
let directionY: string = '';

while (true) {
  const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  // 毎フレームの現在地と、目的地までの差分を出して方角を決定する
  const diffX: number = lightX - currentX;
  const diffY: number = lightY - currentY;
  if (diffX > 0) {
    // 右に移動
    currentX++;
    directionX = 'E';
  } else if (diffX < 0) {
    // 左に移動
    currentX--;
    directionX = 'W';
  } else {
    directionX = '';
  }

  if (diffY > 0) {
    // 下に移動
    currentY++;
    directionY = 'S';
  } else if (diffY < 0) {
    // 上に移動
    currentY--;
    directionY = 'N';
  } else {
    directionY = '';
  }

  // 方角を出力する
  console.log(directionY + directionX);
}
