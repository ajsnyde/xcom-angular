import { Injectable } from '@angular/core';

import { Base } from '../models/base.model';
import { FacilityType } from '../models/facility.model';

@Injectable()
export class BaseViewService {
  bases = [new Base().init('First Base', 15, 66).addFacility(FacilityType.radar, 3, 3), new Base().init('Second Base', 123, 233)];
}