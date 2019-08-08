import { Product } from './product';
import { Observable } from 'rxjs';

export class Cart {
    http: any;


constructor(public productArray : Product[],
    public product : Product){
}

addProduct(productInput : Product){
this.productArray.push(productInput);
}

}
