import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { HomeContentComponent } from './component/home-content/home-content.component';


const routes: Routes = [
  {path:'', component: HomeContentComponent},
  {path:'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
