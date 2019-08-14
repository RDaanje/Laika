
import { Orders } from './orders';

export class Orderhistory {

    id: number;
    orderSet: Array<Orders>;

    setId(id: number){
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setorderSet(Orders: Orders[]) {
        this.orderSet = Orders;
    }

    getorderSet() {
        return this.orderSet;
    }
}
