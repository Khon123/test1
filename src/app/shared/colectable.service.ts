import {Collletable} from "./collectable.model";
export class CollectableService {
    private collectables: Collletable[] = [
        {description: 'this is my own car', type: 'car'},
        {description: 'this is my own motor', type: 'motor'},
        {description: 'this is my own bike', type: 'bike'}
    ];

    getCollectable(){
        return this.collectables;
    }
    private collection : Collletable[] = [];

    getCollection(){
        return this.collection;
    }
    addToCollection(item : Collletable){
        if(this.collection.indexOf(item)!== -1){
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item: Collletable){
        this.collection.splice(this.collection.indexOf(item),1);
    }
}