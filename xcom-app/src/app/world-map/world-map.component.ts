import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MapObject, AlienBase, XcomBase, XcomAircraft } from "./world-map.model";
import { Observable, Subscription } from 'rxjs/Rx';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'world-map',
  templateUrl: 'world-map.html',
  styleUrls: ['world-map.scss']
})
export class WorldMap implements OnInit {
  objects: MapObject[] = [];
  constructor(public appService: AppService, public router: Router) { }
  speed = 15;
  height = 500;
  width = 1000;
  tick: Subscription;

  ngOnInit() {
    for (let i = 0; i < 100; i++)
      this.objects.push(new MapObject());
    for (let i = 0; i < 5; i++)
      this.objects.push(new AlienBase());
    for (let i = 0; i < 22; i++)
      this.objects.push(new XcomAircraft());
    this.timeChange();
  }

  timeChange() {
    if (!!this.tick)
      this.tick.unsubscribe();
    console.log("time changed" + this.speed)
    this.tick = Observable.interval((1000 * 15) / this.speed).subscribe(x => {
      this.move();
    });
  }

  move() {
    this.objects.forEach(mapObject => {
      mapObject.moveObjectRandom();
    });
  }
}
