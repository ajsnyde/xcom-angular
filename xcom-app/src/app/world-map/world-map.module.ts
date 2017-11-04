import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './world-map.routing';

// This Module's Components
import { WorldMap } from './world-map.component';
import { MapObjectComponent } from './src/app/world-map/map-object/map-object.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    WorldMap,
    MapObjectComponent
  ],
  exports: [
    WorldMap
  ]
})
export class WorldMapModule {

}
