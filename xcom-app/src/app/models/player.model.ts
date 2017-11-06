import { Base } from "./base.model";
import { FacilityType } from "./facility.model";
import { Ufo } from "./ufo.model";
import { Interceptor } from "./interceptor.model";
export class Player {

  constructor() {

  }
  name = '';
  currentCash = 0;
  bases = [new Base().init('First Base', 15, 66).addFacility(FacilityType.radar, 3, 3), new Base().init('Second Base', 300, 50)];
  ufos: Ufo[] = [new Ufo().setWaypoint(213, 234)];
  interceptors: Interceptor[] = [new Interceptor(500, 250).setTarget(this.ufos[0]), new Interceptor(23, 200).setTarget(this.ufos[0])];

  getInterceptors() {
    return [].concat.apply([], this.bases.map(base => base.interceptors));
  }
}