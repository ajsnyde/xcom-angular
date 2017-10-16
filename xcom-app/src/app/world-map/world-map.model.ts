export class MapObject {
  x = 0;
  y = 0;
  constructor() {
    this.x = Math.floor((Math.random() * 3000));
    this.y = Math.floor((Math.random() * 1500));
  }
  moveObjectRandom() {
    this.x += Math.floor(Math.random() * 3) - 1;
    this.y += Math.floor(Math.random() * 3) - 1;
  }
}