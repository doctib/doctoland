import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('facebook',sanitizer.bypassSecurityTrustResourceUrl('/assets/image/facebook.svg'));
    iconRegistry.addSvgIcon('instagram',sanitizer.bypassSecurityTrustResourceUrl('/assets/image/instagram.svg'));
    iconRegistry.addSvgIcon('twitter',sanitizer.bypassSecurityTrustResourceUrl('/assets/image/twitter.svg'));
    iconRegistry.addSvgIcon('linkedin',sanitizer.bypassSecurityTrustResourceUrl('/assets/image/linkedin.svg'));
   }

  ngOnInit() {
  }

}
