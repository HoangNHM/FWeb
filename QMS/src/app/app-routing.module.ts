import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeliveryComponent} from './delivery/delivery.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'delivery-services', component: DeliveryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
