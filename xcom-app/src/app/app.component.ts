import { Component } from '@angular/core';
import { Player } from './models/Player.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  constructor(public appService: AppService) { }
  title = 'app';
}
