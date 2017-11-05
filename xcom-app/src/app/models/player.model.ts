import { Base } from "./base.model";
import { FacilityType } from "./facility.model";
import { Ufo } from "./ufo.model";
export class Player {
  name = '';
  currentCash = 0;
  bases = [new Base().init('First Base', 15, 66).addFacility(FacilityType.radar, 3, 3), new Base().init('Second Base', 123, 233)];
  ufos: Ufo[] = [new Ufo().setWaypoint(213, 234)]
}