import { Facility, FacilityType, DefaultFacilities } from "./facility.model";

export class Base {
  name = '';
  //location on map
  x = 0;
  y = 0;
  facilities: Facility[] = DefaultFacilities;
  stores = [];

  getFacilityAt(x, y) {
    return this.facilities.find(facility => facility.x == x && facility.y == y)
  }

  getStoreCap() {
    return this.facilities.filter(facility => {
      facility.type == FacilityType.storage
    }).length * 50;
  }
  getPopCap() {
    return this.facilities.filter(facility => {
      facility.type == FacilityType.livingQuarters
    }).length * 50;
  }
  getScienceCap() {
    return this.facilities.filter(facility => {
      facility.type == FacilityType.labs
    }).length * 50;
  }
  getManufactureCap() {
    return this.facilities.filter(facility => {
      facility.type == FacilityType.workshop
    }).length * 50;
  }
  getRadarRange() {
    return this.facilities.filter(facility => {
      facility.type == FacilityType.radar
    }).length * 50;
  }
  init(name: string, x: number, y: number): Base {
    this.name = name;
    this.x = x;
    this.y = y;
    return this;
  }
}