import { Component, OnInit } from '@angular/core';
import { MapObject } from "./world-map.model";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'world-map',
  templateUrl: 'world-map.html',
  styleUrls: ['world-map.scss']
})
export class WorldMap implements OnInit {
  objects: MapObject[] = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++)
      this.objects.push(new MapObject());
    Observable.interval(50).subscribe(x => {
      this.move();
    });
  }

  move() {
    this.objects.forEach(mapObject => {
      mapObject.moveObjectRandom();
    });
  }
}
