export class MapObject {
  imgPath = "../../assets/ufo.png";
  x = 0;
  y = 0;
  constructor() {
    this.x = Math.floor((Math.random() * 1000));
    this.y = Math.floor((Math.random() * 500));
  }
  moveObjectRandom() {
    this.x += Math.floor(Math.random() * 3) - 1;
    this.y += Math.floor(Math.random() * 3) - 1;
  }
  click() {
    window.alert("ufo")
  }
}
export class Base extends MapObject {
  constructor() {
    super();

  }
  moveObjectRandom() {
  }
}
export class AlienBase extends Base {
  imgPath = "../../assets/alienBase.png";
  constructor() {
    super();

  }
  click() {
    window.alert("alienBase")
  }
}
export class XcomBase extends Base {
  imgPath = "../../assets/xcomBase.png";
  constructor() {
    super();
  }
  click() {
    window.alert("xcomBase")
  }
}
export class XcomAircraft extends MapObject {
  imgPath = "../../assets/xcomAircraft.png";
  constructor() {
    super();
  }
  click() {
    window.alert("xcomAircraft")
  }
}