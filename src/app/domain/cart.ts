import { Product } from './product';

export class Cart {

productsFromCart: number[];

constructor(public productArray : Product[]){
}

addProduct(productInput : Product){
this.productArray.push(productInput);
}

}
