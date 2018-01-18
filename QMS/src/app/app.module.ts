import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';


import { AppComponent } from './app.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { NodeComponent } from './node/node.component';
import { SalesComponent } from './sales/sales.component';
import { DeliveryServiceHexagonComponent } from './snode/snode.component';
import { SnodeMainComponent } from './snode-main/snode-main.component';
import { SnodeSubComponent } from './snode-sub/snode-sub.component';
import { HalfCircularMenuComponent } from './half-circular-menu/half-circular-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { AppRoutingModule } from './/app-routing.module';
import { SoftwareComponent } from './software/software.component';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    NodeComponent,
    SalesComponent,
    DeliveryServiceHexagonComponent,
    SnodeMainComponent,
    SnodeSubComponent,
    HalfCircularMenuComponent,
    HomePageComponent,
    MenuToggleComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
