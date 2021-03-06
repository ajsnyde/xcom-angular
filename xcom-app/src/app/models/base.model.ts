import { Facility, FacilityType, DefaultFacilities } from "./facility.model";
import { Interceptor } from "./interceptor.model";
import { Target } from "./target.model";

export class Base implements Target {
  name = '';
  //location on map
  x = 0;
  y = 0;
  facilities: Facility[] = DefaultFacilities();
  stores = [];
  interceptors: Interceptor[] = [new Interceptor(this), new Interceptor(this)];

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
    this.interceptors.forEach(interceptor => { interceptor.x = this.x; interceptor.y = this.y; })
    return this;
  }
}