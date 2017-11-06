import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MapObject, AlienBase, XcomBase, XcomAircraft } from "./world-map.model";
import { Observable, Subscription } from 'rxjs/Rx';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'world-map',
  templateUrl: 'world-map.html',
  styleUrls: ['world-map.scss']
})
export class WorldMap implements OnInit, OnDestroy {
  objects: MapObject[] = [];
  constructor(public appService: AppService, public router: Router, private modalService: NgbModal) { }
  speedChoices = [15, 30, 60, 300, 900, 3600];
  speed = this.speedChoices[0];
  height = 500;
  width = 1000;
  tick: Subscription;

  ngOnInit() {
    for (let i = 0; i < 5; i++)
      this.objects.push(new AlienBase());
    this.timeChange();
  }
  ngOnDestroy() {
    this.tick.unsubscribe();
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
    this.appService.player.ufos.forEach(ufo => ufo.move());
    this.appService.player.interceptors.forEach(interceptor => interceptor.move());
    this.objects.forEach(mapObject => {
      mapObject.moveObjectRandom();
    });
  }
  keyPress(event) {
    event = event - 49;
    if (event < this.speedChoices.length && event >= 0) {
      this.speed = this.speedChoices[event];
      this.timeChange();
    }
  }

  launchButton(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
