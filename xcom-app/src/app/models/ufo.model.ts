import { Target } from "./target.model";
import { Coordinates } from './coordinates.model';

export class UfoType {
  public constructor(public name: string, public maxSpeed: number) { }
}

export class Ufo implements Target {
  x = 0;
  y = 0;
  static UfoTypes: UfoType[] = [
    new UfoType("smallScout", .6)
  ];
  constructor() {
    this.x = Math.random() * 1000;
    this.y = Math.random() * 500;
  }

  static idCounter = 0;
  id = Ufo.idCounter++;
  name = 'UFO-' + this.id;
  UfoType = Ufo.UfoTypes[0];

  target: Target = new Coordinates(0, 0);

  public setWaypoint(x, y): Ufo {
    this.target = new Coordinates(x, y);
    return this;
  }

  public setTarget(target: Target): Ufo {
    this.target = target;
    return this;
  }

  public move() {
    if (this.x - this.target.x < this.UfoType.maxSpeed && this.y - this.target.y < this.UfoType.maxSpeed) {
      this.target.x = Math.random() * 1000;
      this.target.y = Math.random() * 500;
    }
    let tx = this.target.x - this.x,
      ty = this.target.y - this.y,
      dist = Math.sqrt(tx * tx + ty * ty),
      rad = Math.atan2(ty, tx),
      angle = rad / Math.PI * 180;

    this.x += (tx / dist) * this.UfoType.maxSpeed;
    this.y += (ty / dist) * this.UfoType.maxSpeed;
  }
}