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
import { ResearchViewComponent } from './research-view/research-view.component';
import { Http, HttpModule } from '@angular/http';
import { LaunchFormComponent } from './launch-form/launch-form.component';
import { TargetModalComponent } from './target-modal/target-modal.component';

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
    TopMenuComponent,
    BaseViewComponent,
    ResearchViewComponent,
    LaunchFormComponent,
    TargetModalComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [LaunchFormComponent, TargetModalComponent]
})
export class AppModule { }
