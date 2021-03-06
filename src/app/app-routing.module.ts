import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { HomeContentComponent } from './component/home-content/home-content.component';
import { SearchResutlComponent } from './component/search-resutl/search-resutl.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ProfessComponent } from './component/profess/profess.component';
import { NeedhelpComponent } from './component/needhelp/needhelp.component';
import { CareerComponent } from './component/career/career.component';
import { CareerDescComponent } from './component/career-desc/career-desc.component';
import { InvestorsComponent } from './component/investors/investors.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';


const routes: Routes = [
  {path:'', component: HomeContentComponent},
  {path:'menu', component: MenuComponent},
  {path:'search', component:SearchResutlComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'professional',component: ProfessComponent},
  {path:'needhelp',component:NeedhelpComponent},
  {path:'career', component:CareerComponent},
  {path:'jobdesc',component: CareerDescComponent},
  {path:'investor',component:InvestorsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-page', component: BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
