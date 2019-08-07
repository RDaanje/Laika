import { Product } from './product';

export class Cart {


constructor(public productArray : Product[]){
}

addProduct(productInput : Product){
this.productArray.push(productInput);
}

}
