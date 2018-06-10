import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ConfessionsInfoDialogComponent } from './confessions-info-dialog/confessions-info-dialog.component';

import { confessions } from './vars/confessions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  confessionIdx: number = 0;
  confessions: any[] = confessions;
  imageConfig =  {
           zoom: 1,
           maxZoom: 4,
           minZoom: 1,
           imageDim: [3328, 5384],
           sourceTile: {
             tileUrl: './assets/tiles/02_Jenny_Marx_resized/{z}/{x}/{y}.png',
             tileOptions: {
               updateWhenIdle: true,
               updateInterval: 10,
               tms: true
             }
           }
      };

  viewPortItems: any[];

  constructor(private dialog: MatDialog) {

  }
  public increaseIdx() {
    if (this.confessionIdx === this.confessions.length - 1) {
      this.confessionIdx = 0;
    } else {
      this.confessionIdx += 1
    }
  }

  public decreaseIdx() {
    if (this.confessionIdx === 0) {
      this.confessionIdx = this.confessions.length - 1;
    } else {
      this.confessionIdx -= 1
    }
  }

  public openInfoDialog() {
    this.dialog.open(ConfessionsInfoDialogComponent,  {
      height: '400px',
      width: '600px',
    });
  }
}
