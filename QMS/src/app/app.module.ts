import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { NodeComponent } from './node/node.component';
import { SalesComponent } from './sales/sales.component';
import { SnodeComponent } from './snode/snode.component';
import { SnodeMainComponent } from './snode-main/snode-main.component';
import { SnodeSubComponent } from './snode-sub/snode-sub.component';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    NodeComponent,
    SalesComponent,
    SnodeComponent,
    SnodeMainComponent,
    SnodeSubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
