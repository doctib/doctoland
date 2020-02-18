import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { HomeContentComponent } from './component/home-content/home-content.component';
import { SearchResutlComponent } from './component/search-resutl/search-resutl.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';


const routes: Routes = [
  {path:'', component: HomeContentComponent},
  {path:'menu', component: MenuComponent},
  {path:'search', component:SearchResutlComponent},
  {path:'aboutus',component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
