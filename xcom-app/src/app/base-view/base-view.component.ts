import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Base } from '../models/base.model';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseViewComponent implements OnInit, OnDestroy {

  constructor(public appService: AppService, public activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef) { }

  base = new Base();
  routeSubscription: Subscription;
  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.base = this.appService.player.bases[params.id];
      this.ref.detectChanges();
    });
  }
  ngOnDestroy() { this.routeSubscription.unsubscribe() }
}
