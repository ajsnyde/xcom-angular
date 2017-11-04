import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WorldMap } from "./world-map/world-map.component";
import { TopMenuComponent } from './top-menu/top-menu.component';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { BaseViewComponent } from './base-view/base-view.component';
import { AppService } from './app.service';

const routes: Routes = [
  { path: 'geoscape', component: WorldMap },
  { path: 'login', component: TopMenuComponent },
  { path: 'baseView/:id', component: BaseViewComponent },
  { path: '**', component: WorldMap },

];

@NgModule({
  declarations: [
    AppComponent,
    WorldMap,
    TopMenuComponent,
    BaseViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
