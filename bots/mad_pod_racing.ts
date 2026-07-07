import Vector2 from '../utils/vector2';
declare const readline: () => string;

const checkPoints: Vector2[] = [];
let lastCheckPoint: Vector2 = new Vector2(-9999, -9999);
let maxDistance: number = 0;
let maxDistancePoint: Vector2 = new Vector2(-1, -1);
let recorded: boolean = false;

// game loop
while (true) {
  var inputs: string[] = readline().split(' ');
  const x: number = parseInt(inputs[0]);
  const y: number = parseInt(inputs[1]);
  const nextCheckpointX: number = parseInt(inputs[2]);
  const nextCheckpointY: number = parseInt(inputs[3]);
  const nextCheckpointDist: number = parseInt(inputs[4]);
  const nextCheckpointAngle: number = parseInt(inputs[5]);
  var inputs: string[] = readline().split(' ');
  const opponentX: number = parseInt(inputs[0]);
  const opponentY: number = parseInt(inputs[1]);

  const currentTarget = new Vector2(nextCheckpointX, nextCheckpointY);

  if (!recorded) {
    if (
      lastCheckPoint.x !== currentTarget.x ||
      lastCheckPoint.y !== currentTarget.y
    ) {
      const isExist = checkPoints.some(
        (cp) => cp.x === currentTarget.x && cp.y === currentTarget.y,
      );

      if (!isExist) {
        // 新発見のチェックポイントなら登録
        checkPoints.push(currentTarget);
        lastCheckPoint = currentTarget; // 「最後に登録したCP」を更新
      } else {
        // すでに登録した場所に戻ってきた ＝ 1周完了！
        recorded = true;
        console.error(`--- 全 ${checkPoints.length} 個のCPを検出 ---`);

        // 各チェックポイント間の距離を計算する
        for (let i = 0; i < checkPoints.length; i++) {
          const current = checkPoints[i];
          const next = checkPoints[(i + 1) % checkPoints.length];
          const distance = Vector2.distance(current, next);

          if (distance > maxDistance) {
            maxDistance = distance;
            maxDistancePoint = next; // 最長直線の「ゴール地点」を記録
          }
        }
        console.error(
          `★最長直線ターゲット決定: (${maxDistancePoint.x}, ${maxDistancePoint.y}) 距離: ${maxDistance}`,
        );
      }
    }
  }

  // --- スピード（Thrust）の決定ロジック ---
  let thrust: string = '100';

  // 基本の旋回減速
  if (Math.abs(nextCheckpointAngle) >= 40) {
    thrust = '20';
  } else {
    thrust = '100';
  }

  // BOOSTの強制上書き
  // 2周目以降 ＆ 今向かっているのが最長直線 ＆ 角度がほぼ正面（20度以内）＆ 距離がまだ十分ある
  if (
    recorded &&
    nextCheckpointX === maxDistancePoint.x &&
    nextCheckpointY === maxDistancePoint.y &&
    Math.abs(nextCheckpointAngle) <= 20
  ) {
    thrust = 'BOOST';
  }

  console.log(nextCheckpointX + ' ' + nextCheckpointY + ` ${thrust}`);
}
