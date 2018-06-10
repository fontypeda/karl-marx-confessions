import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from '@angular/material/dialog';


import { FlexLayoutModule } from '@angular/flex-layout';

import { VirtualScrollModule } from 'angular2-virtual-scroll';

// import { LeafletZoomDisplayComponent } from 'leaflet-zoom-slide-show';

import { AppComponent } from './app.component';
import { LeafletZoomComponent } from './leaflet-zoom/leaflet-zoom.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ConfessionsInfoDialogComponent } from './confessions-info-dialog/confessions-info-dialog.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}


@NgModule({
  declarations: [
    AppComponent,
    LeafletZoomComponent,
    ListItemComponent,
    ConfessionsInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FlexLayoutModule,
    VirtualScrollModule
  ],
  entryComponents: [
    ConfessionsInfoDialogComponent
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
