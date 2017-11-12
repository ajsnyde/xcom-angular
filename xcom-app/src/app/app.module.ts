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
import { MapObjectComponent } from './world-map/map-object/map-object.component';
import { ResearchViewComponent } from './research-view/research-view.component';
import { Http, HttpModule } from '@angular/http';

const routes: Routes = [
  { path: 'geoscape', component: WorldMap },
  { path: 'login', component: TopMenuComponent },
  { path: 'baseView/:id', component: BaseViewComponent },
  { path: 'research', component: ResearchViewComponent },
  { path: '**', component: WorldMap },

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    WorldMap,
    MapObjectComponent,
    TopMenuComponent,
    BaseViewComponent,
    ResearchViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
