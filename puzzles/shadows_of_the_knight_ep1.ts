declare const readline: () => string;

var inputs: string[] = readline().split(' ');
const W: number = parseInt(inputs[0]); // width of the building.
const H: number = parseInt(inputs[1]); // height of the building.
const N: number = parseInt(readline()); // maximum number of turns before game over.
var inputs: string[] = readline().split(' ');
let currentX: number = parseInt(inputs[0]);
let currentY: number = parseInt(inputs[1]);

// 探索範囲
let minX: number = 0;
let maxX: number = W - 1;
let minY: number = 0;
let maxY: number = H - 1;

// 二分探索法を用いる
// 探索範囲を定義する(最小・最大)
// 探索範囲内の中央値( Math.floor((min + max) / 2))を求めて、検索対象と比較を行う

while (true) {
  const bombDir: string = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
  // Y座標の探索範囲を更新する
  if (bombDir.includes('U')) {
    maxY = currentY - 1; // 0~currentY-1
  } else if (bombDir.includes('D')) {
    minY = currentY + 1; // currentY+1~H-1
  }

  // X座標の探索範囲を更新する
  if (bombDir.includes('L')) {
    maxX = currentX - 1; // 0~currentX-1
  } else if (bombDir.includes('R')) {
    minX = currentX + 1; // currentX+1~W-1
  }

  // 探索範囲の中央値を求める
  currentX = Math.floor((minX + maxX) / 2);
  currentY = Math.floor((minY + maxY) / 2);
  // the location of the next window Batman should jump to.
  console.log(`${currentX} ${currentY}`);
}
