import { Product } from './product';
import { OrderProduct } from './order-product';

export class Orders {

    date: string;
    status: string;
    name: string;
    adress: string;
    zipcode: string;
    email: string;
    counter: string;
    total: string;

    orderSubSet: Array<OrderProduct> = [];

}
