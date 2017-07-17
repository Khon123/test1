import {CollectionComponent} from "./collection/collection.component";
import {MarketComponent} from "./market/market.component";
import {RouterModule, Routes} from "@angular/router";
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/collection', pathMatch: 'full' },
    { path: 'collection', component: CollectionComponent },
    { path: 'market', component: MarketComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
