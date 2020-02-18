import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 
// EOF Material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './component/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import {
  HomeContentComponent,
  DialogOverviewExampleDialog
} from './component/home-content/home-content.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
// tslint:disable-next-line: max-line-length
import { BottomSheetOverviewSocialMediaComponent } from './component/bottom-sheet-overview-social-media/bottom-sheet-overview-social-media.component';
import { SearchResutlComponent } from './component/search-resutl/search-resutl.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeContentComponent,
    SidenavComponent,
    BottomSheetOverviewSocialMediaComponent,
    DialogOverviewExampleDialog,
    SearchResutlComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    MatBottomSheetModule,
    DragDropModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [],
  entryComponents: [BottomSheetOverviewSocialMediaComponent,DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
