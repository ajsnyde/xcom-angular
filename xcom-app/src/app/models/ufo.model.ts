export class UfoType {
  public constructor(public name: string, public maxSpeed: number) { }
}

export class Ufo {
  static UfoTypes: UfoType[] = [
    new UfoType("smallScout", .5)
  ];

  static idCounter = 0;
  id = Ufo.idCounter++;
  name = 'UFO-' + this.id;
  UfoType = Ufo.UfoTypes[0];
  //location on map
  x = 0;
  y = 0;
  waypointX = 0;
  waypointY = 0;

  public setWaypoint(x, y): Ufo {
    this.x = x;
    this.y = y;
    return this;
  }

  public move() {
    if (this.x - this.waypointX < this.UfoType.maxSpeed && this.y - this.waypointY < this.UfoType.maxSpeed) {
      this.waypointX = Math.random() * 1000;
      this.waypointY = Math.random() * 500;
    }
    let tx = this.waypointX - this.x,
      ty = this.waypointY - this.y,
      dist = Math.sqrt(tx * tx + ty * ty),
      rad = Math.atan2(ty, tx),
      angle = rad / Math.PI * 180;

    this.x += (tx / dist) * this.UfoType.maxSpeed;
    this.y += (ty / dist) * this.UfoType.maxSpeed;
  }
}