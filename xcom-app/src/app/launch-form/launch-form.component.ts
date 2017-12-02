import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';
import { Interceptor } from '../models/interceptor.model';

@Component({
  selector: 'app-launch-form',
  templateUrl: './launch-form.component.html',
  styleUrls: ['./launch-form.component.css']
})
export class LaunchFormComponent implements OnInit {

  constructor(public appService: AppService, public activeModal: NgbActiveModal) { }
  @Input() allInterceptors: Interceptor[] = [];
  proposedTaskForce: Interceptor[] = [];
  @Output() reroute: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  rerouteConfirm() {
    this.reroute.emit(this.proposedTaskForce);
    this.activeModal.close(this.proposedTaskForce)
  }
}
