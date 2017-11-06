import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-object',
  templateUrl: './map-object.component.html',
  styleUrls: ['./map-object.component.css']
})
export class MapObjectComponent implements OnInit {

  @Input() imgPath = "../../assets/ufo.png";
  @Input() type = 'ufo';
  @Input() name = '1';
  @Input() x = 0;
  @Input() y = 0;
  @Input() radius = 0;
  @Output() clickEvent = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }
  click() {
    this.clickEvent.emit(this.name);
  }
}
