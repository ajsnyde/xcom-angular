export class Facility {
  type: FacilityType;
  x = 0;
  y = 0;
  orientation = 0;// 0-3 90 degree rotations
}
export enum FacilityType {
  storage = 'Storage',
  livingQuarters = 'Living Quarters',
  labs = 'Labs',
  workshop = 'Workshop',
  radar = 'Radar',
  hanger = 'Hanger'
}

export function DefaultFacilities(): Facility[] {
  return [
    { type: FacilityType.hanger, x: 0, y: 0, orientation: 0 },
    { type: FacilityType.hanger, x: 1, y: 0, orientation: 0 },
    { type: FacilityType.hanger, x: 2, y: 0, orientation: 0 },
    { type: FacilityType.livingQuarters, x: 0, y: 1, orientation: 0 },
    { type: FacilityType.storage, x: 1, y: 1, orientation: 0 },
    { type: FacilityType.radar, x: 2, y: 1, orientation: 0 },
    { type: FacilityType.labs, x: 3, y: 1, orientation: 0 },
    { type: FacilityType.workshop, x: 2, y: 2, orientation: 0 }
  ]
};