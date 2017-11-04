import { Injectable } from '@angular/core';
import { Player } from './models/Player.model';

@Injectable()
export class AppService {
  public player = new Player();
}