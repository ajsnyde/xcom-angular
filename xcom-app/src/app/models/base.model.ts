import { Facility, FacilityType, DefaultFacilities } from "./facility.model";
import { Interceptor } from "./interceptor.model";

export class Base {
  name = '';
  //location on map
  x = 0;
  y = 0;
  facilities: Facility[] = DefaultFacilities();
  stores = [];
  interceptors: Interceptor[] = [];

  getFacilityAt(x, y) {
    return this.facilities.find(facility => facility.x == x && facility.y == y)
  }

  getStorageCap() {
    return this.facilities.filter(facility =>
      facility.type == FacilityType.storage
    ).length * 50;
  }
  getPopCap() {
    return this.facilities.filter(facility =>
      facility.type == FacilityType.livingQuarters
    ).length * 50;
  }
  getScienceCap() {
    return this.facilities.filter(facility =>
      facility.type == FacilityType.labs
    ).length * 50;
  }
  getManufactureCap() {
    return this.facilities.filter(facility =>
      facility.type == FacilityType.workshop
    ).length * 50;
  }
  getRadarRange() {
    return Math.sqrt(this.facilities.filter(facility =>
      facility.type == FacilityType.radar
    ).length) * 100;
  }

  addFacility(type: FacilityType, x: number, y: number): Base {
    if (this.getFacilityAt(x, y) == null) {
      let facility = new Facility();
      facility.x = x;
      facility.y = y;
      facility.type = type;
      this.facilities.push(facility);
    }
    return this;
  }

  init(name: string, x: number, y: number): Base {
    this.name = name;
    this.x = x;
    this.y = y;
    return this;
  }
}