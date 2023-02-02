import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }];
 
//   path: 'Home',
//   component: AdminLayoutComponent, canActivate: [AuthGuard],
//   children: [
//       { path: 'Home', redirectTo: 'DashboardComponent', pathMatch: 'full' },
//       { path: '', component: DashboardComponent },
//       { path: 'RFPReview', component: ReviewRFPComponent, data: { breadcrumb: 'Review RFP' }, canActivate: [AuthGuard] },
//       { path: 'SellerResponse/:id', component: SellerResponseComponent, data: { breadcrumb: 'Quick Response' }, canActivate: [AuthGuard] },
//   ]


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
})
export class RoutesRoutingModule {

}
