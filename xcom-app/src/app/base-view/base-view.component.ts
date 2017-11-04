import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Base } from '../models/base.model';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit, OnDestroy {

  constructor(public appService: AppService, public activatedRoute: ActivatedRoute) { }

  base = new Base();
  routeSubscription: Subscription;
  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.base = this.appService.player.bases[params.id];
    });
  }
  ngOnDestroy() { this.routeSubscription.unsubscribe() }
}
