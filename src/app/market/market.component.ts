import { Component, OnInit } from '@angular/core';
import {CollectableService} from "../shared/colectable.service";
import {Collletable} from "../shared/collectable.model";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
})
export class MarketComponent implements OnInit {
  collectables: Collletable[] = [];
  constructor(private collectionService: CollectableService) { }

  onAddCollection(item: Collletable) {
    this.collectionService.addToCollection(item);
  }
  ngOnInit() {
    this.collectables = this.collectionService.getCollectable();
  }

}
