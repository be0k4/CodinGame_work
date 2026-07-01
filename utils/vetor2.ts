class Vector2 {
  constructor(
    public x: number = 0,
    public y: number = 0,
  ) {}

  // 加算 (自分自身を書き換えず、新しいVector2を返す)
  add(v: Vector2): Vector2 {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  // 減算
  sub(v: Vector2): Vector2 {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  // スカラー倍
  multiply(scalar: number): Vector2 {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  // ベクトルの長さ（大きさ）
  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // 2点間の距離 (Unityの Vector2.Distance(a, b) 相当)
  static distance(a: Vector2, b: Vector2): number {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  // 正規化（大きさを1にする）
  normalize(): Vector2 {
    const mag = this.magnitude();
    if (mag === 0) return new Vector2(0, 0);
    return new Vector2(this.x / mag, this.y / mag);
  }

  // 便利な方向のショートカット (Unityの Vector2.up など)
  static get zero() {
    return new Vector2(0, 0);
  }
  static get up() {
    return new Vector2(0, -1);
  } // ⚠️画面座標系では上がマイナス
  static get down() {
    return new Vector2(0, 1);
  }
  static get left() {
    return new Vector2(-1, 0);
  }
  static get right() {
    return new Vector2(1, 0);
  }
}
