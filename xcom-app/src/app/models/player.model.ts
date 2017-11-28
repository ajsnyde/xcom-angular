import { Base } from "./base.model";
import { FacilityType } from "./facility.model";
import { Ufo } from "./ufo.model";
import { Interceptor } from "./interceptor.model";
import { ResearchTopic } from "./research.model"

export class Player {
  name = '';
  currentCash = 0;
  bases: Base[] = [new Base().init('First Base', 15, 66).addFacility(FacilityType.radar, 3, 3), new Base().init('Second Base', 300, 50)];
  ufos: Ufo[] = [new Ufo().setWaypoint(213, 234), new Ufo().setWaypoint(123, 555), new Ufo().setWaypoint(522, 22)];
  researchCompleted: ResearchTopic[] = [];

  getAllInterceptors() {
    return [].concat.apply([], this.bases.map(base => base.interceptors));
  }
  getFlyingInterceptors() {
    return [].concat.apply([], this.bases.map(base => base.interceptors)).filter(interceptor => !interceptor.landed);
  }
  getLandedInterceptors() {
    return [].concat.apply([], this.bases.map(base => base.interceptors)).filter(interceptor => interceptor.landed);
  }
}