import { Target } from "./target.model";
import { Base } from "./base.model";
import { Coordinates } from './coordinates.model';

export class interceptorType {
  public constructor(public name: string, public maxSpeed: number, public fuelCapacity: number) { }
}

export class Interceptor implements Target {
  static interceptorTypes: interceptorType[] = [
    new interceptorType("F-16", .5, 480)
  ];
  x = 0;
  y = 0;

  constructor(homeBase: Base) {
    this.homeBase = homeBase;
    this.x = this.homeBase.x;
    this.y = this.homeBase.y;
  }

  static idCounter = 0;
  id = Interceptor.idCounter++;
  name = 'Interceptor-' + this.id;
  interceptorType = Interceptor.interceptorTypes[0];
  homeBase: Base;
  target: Target = new Coordinates();
  landed = true;
  fuelCapacity = Interceptor.interceptorTypes[0].fuelCapacity; // flight-hours
  fuel = 0;
  public setWaypoint(x, y): Interceptor {
    this.target = new Coordinates();
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
      if (this.target instanceof Base) {
        this.setHomeBase(this.target as Base);
        this.landed = true;
      }
      else
        console.log(this.name + ' is within standoff range of target.');
    } else if (this.fuel <= 0) {
      this.setTarget(this.homeBase);
    }
    this.fuel--;
    let tx = this.target.x - this.x,
      ty = this.target.y - this.y,
      dist = Math.sqrt(tx * tx + ty * ty),
      rad = Math.atan2(ty, tx),
      angle = rad / Math.PI * 180;

    this.x += (tx / dist) * this.interceptorType.maxSpeed;
    this.y += (ty / dist) * this.interceptorType.maxSpeed;
  }

  refuel() {
    if (this.fuel < this.fuelCapacity)
      this.fuel = Math.min(this.fuel += 10, this.fuelCapacity);
  }

  getStatus(): string {
    if (this.landed)
      if (this.fuel < this.fuelCapacity)
        return "Refueling (" + this.fuel + "/" + this.fuelCapacity + ") - " + this.homeBase.name;
      else
        return "Landed - " + this.homeBase.name
    else return "Flying to  " + this.target.name;
  }
}