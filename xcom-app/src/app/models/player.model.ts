import { Base } from "./base.model";

export class Player {
  name = '';
  currentCash = 0;
  bases = [new Base().init('First Base', 15, 66), new Base().init('Second Base', 123, 233)];
}