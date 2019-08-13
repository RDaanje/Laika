import { Product } from './product';


export class Cart {

id: number;
// productsFromCart: number[];
total: number;
// productstoShow: number[];
// productstoShowAmmount: number[];
productSet: Product[];
totalProducts: number;


constructor(){
    console.log("constructor:")
    // console.log(this.productsFromCart)
    
}

getId()    {
    return this.id;
}

setId(id: number)  {
    this.id = id;
}

getTotal()  {
    return this.total;
}

setTotal(total: number)  {
    this.total = total;
}

setproductSet(products: Product[]) {
    this.productSet = products;
}

getproductSet() {
    return this.productSet
}
}