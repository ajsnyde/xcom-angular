import { Base } from "./base.model";
import { FacilityType } from "./facility.model";

export class Player {
  name = '';
  currentCash = 0;
  bases = [new Base().init('First Base', 15, 66).addFacility(FacilityType.radar, 3, 3), new Base().init('Second Base', 123, 233)];
}