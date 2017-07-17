import { Component, OnInit } from '@angular/core';
import {Collletable} from "../shared/collectable.model";
import {CollectableService} from "../shared/colectable.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectItems: Collletable[] = [];
  constructor(private collectionService: CollectableService) { }

  ngOnInit() {
    this.collectItems = this.collectionService.getCollection();
  }

  onRemoveFromColletion(item: Collletable){
    this.collectionService.removeFromCollection(item);
  }
}
