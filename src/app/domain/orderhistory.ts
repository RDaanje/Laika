import { Cart } from './cart';

export class Orderhistory {

    id: number;
    allOrders: Array<Cart>;
    paid: boolean;
    totalCosts: number;
    time: string;

    setId(id: number){
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setAllOrders(orders: Cart[])    {
        this.allOrders = orders;
    }

    getAllOrders()  {
        return this.allOrders;
    }

    setPaid(paid: boolean)   {
        this.paid = paid;
    }

    getPaid()   {
        return this.paid;
    }

    setTotalCosts(costs: number) {
        this.totalCosts = costs;
    }

    getTotalCosts() {
        return this.totalCosts;
    }

    setTime(time: string)   {
        this.time = time;
    }

    getTime()   {
        return this.time;
    }
}
