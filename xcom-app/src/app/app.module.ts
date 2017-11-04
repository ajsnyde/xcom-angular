import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorldMap } from "./world-map/world-map.component";
import { TopMenuComponent } from './top-menu/top-menu.component';
import {
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  { path: 'home', component: WorldMap },
  { path: 'login', component: TopMenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WorldMap,
    TopMenuComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
