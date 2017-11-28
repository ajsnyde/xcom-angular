import { Target } from "./target.model";
import { Base } from "./base.model";

export class interceptorType {
  public constructor(public name: string, public maxSpeed: number) { }
}

export class Interceptor extends Target {
  static interceptorTypes: interceptorType[] = [
    new interceptorType("F-16", .5)
  ];

  constructor(homeBase: Base) {
    super();
    this.homeBase = homeBase;
    this.x = this.homeBase.x;
    this.y = this.homeBase.y;
  }

  static idCounter = 0;
  id = Interceptor.idCounter++;
  name = 'Interceptor-' + this.id;
  interceptorType = Interceptor.interceptorTypes[0];
  homeBase: Base;
  target = new Target();
  landed = true;

  public setWaypoint(x, y): Interceptor {
    this.target = new Target();
    this.target.x = x;
    this.target.y = y;
    return this;
  }

  public setTarget(target: Target): Interceptor {
    this.target = target;
    this.landed = false;
    return this;
  }
  public setHomeBase(homeBase: Base): Interceptor {
    this.homeBase = homeBase;
    return this;
  }

  public move() {
    if (Math.abs(this.x - this.target.x) < 5 && Math.abs(this.y - this.target.y) < 5) {
      console.log(this.name + ' is within standoff range of target.')
    }
    let tx = this.target.x - this.x,
      ty = this.target.y - this.y,
      dist = Math.sqrt(tx * tx + ty * ty),
      rad = Math.atan2(ty, tx),
      angle = rad / Math.PI * 180;

    this.x += (tx / dist) * this.interceptorType.maxSpeed;
    this.y += (ty / dist) * this.interceptorType.maxSpeed;
  }
}