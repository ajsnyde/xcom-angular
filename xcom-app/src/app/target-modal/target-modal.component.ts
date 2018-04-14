import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';
import { Interceptor } from '../models/interceptor.model';
import { Target } from '../models/target.model';

@Component({
  selector: 'app-target-modal',
  templateUrl: './target-modal.component.html',
  styleUrls: ['./target-modal.component.css']
})
export class TargetModalComponent implements OnInit {

  constructor(public appService: AppService, public activeModal: NgbActiveModal) { }
  @Input() target: Target;
  @Output() reroute: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  rerouteConfirm() {
    this.reroute.emit();
    this.activeModal.close()
  }
}
