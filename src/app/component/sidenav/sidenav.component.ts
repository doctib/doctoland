import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewSocialMediaComponent } from '../bottom-sheet-overview-social-media/bottom-sheet-overview-social-media.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewSocialMediaComponent);
  } 
}
