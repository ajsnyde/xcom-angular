import { Target } from "./target.model";

export class Coordinates implements Target {
  x = 0;
  y = 0;
  name = this.x + "," + this.y;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}