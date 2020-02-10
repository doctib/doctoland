import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet'

@Component({
  selector: 'app-bottom-sheet-overview-social-media',
  templateUrl: './bottom-sheet-overview-social-media.component.html',
  styleUrls: ['./bottom-sheet-overview-social-media.component.css']
})
export class BottomSheetOverviewSocialMediaComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewSocialMediaComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
