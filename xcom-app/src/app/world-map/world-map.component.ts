import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Interceptor } from '../models/interceptor.model';
import { Target } from '../models/target.model';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { LaunchFormComponent } from '../launch-form/launch-form.component';
import { TargetModalComponent } from '../target-modal/target-modal.component';

@Component({
  selector: 'world-map',
  templateUrl: 'world-map.html',
  styleUrls: ['world-map.scss']
})
export class WorldMap implements OnInit, OnDestroy {
  constructor(public appService: AppService, public router: Router, private modalService: NgbModal) { }
  speedChoices = [15, 30, 60, 300, 900, 3600];
  speed = this.speedChoices[0];
  height = 500;
  width = 1000;
  tick: Subscription;
  proposedTaskForce: Interceptor[] = [];
  isWaitingForTarget = false;
  ngOnInit() {
    this.timeChange();
  }
  ngOnDestroy() {
    this.tick.unsubscribe();
  }
  timeChange() {
    if (!!this.tick)
      this.tick.unsubscribe();
    this.tick = Observable.interval((1000 * 15) / this.speed).subscribe(x => {
      this.move();
    });
  }

  move() {
    this.appService.player.ufos.forEach(ufo => ufo.move());
    this.appService.player.getFlyingInterceptors().forEach(interceptor => interceptor.move());
    this.appService.player.getLandedInterceptors().forEach(interceptor => interceptor.refuel());
  }

  keyPress(event) {
    event = event - 49;
    if (event < this.speedChoices.length && event >= 0) {
      this.speed = this.speedChoices[event];
      this.timeChange();
    }
  }

  launchButtonClicked(target?: Target) {
    const modalRef = this.modalService.open(LaunchFormComponent);
    modalRef.componentInstance.allInterceptors = this.appService.player.getAllInterceptors();
    modalRef.componentInstance.reroute.subscribe(interceptors => {
      this.proposedTaskForce = interceptors;
      if (target)
        this.scrambleInterceptors(target);
      else
        this.isWaitingForTarget = true;
    });
  }

  clickTarget(target: Target) {
    if (this.isWaitingForTarget) {
      this.scrambleInterceptors(target);
      this.isWaitingForTarget = false;
    }
    else
      this.openTargetModal(target);
  }

  openTargetModal(target: Target) {
    const modalRef = this.modalService.open(TargetModalComponent);
    modalRef.componentInstance.target = target;
    modalRef.componentInstance.reroute.subscribe(i => {
      this.launchButtonClicked(target);
    });
  }

  scrambleInterceptors(target: Target) {
    this.proposedTaskForce.forEach(interceptor => {
      interceptor.landed = false;
      interceptor.setTarget(target);
    })
  }
}
