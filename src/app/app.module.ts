import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import {CollectableService} from "./shared/colectable.service";
import { HeaderComponent } from './header.component';
import {routing} from "./app.routing";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
