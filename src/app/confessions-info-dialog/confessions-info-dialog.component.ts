import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confessions-info-dialog',
  templateUrl: './confessions-info-dialog.component.html',
  styleUrls: ['./confessions-info-dialog.component.scss']
})
export class ConfessionsInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfessionsInfoDialogComponent>) { }

  ngOnInit() {
  }

}
