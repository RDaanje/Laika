import { Wallet } from './wallet';
import { Cart } from './cart';
import { Orderhistory } from './orderhistory';

export class Account {
    id : number;

    firstname: string;
    lastname: string;

    username: string;
    password: string;
    email: string;

    street : string;
    houseNumber: string;
    zipcode: string;
    city: string;   

    wallet: Wallet;
    cart: Cart;
    orderhistory: Orderhistory

    isAdmin: boolean;
    showInvoice: boolean = false;
    
    constructor() {
      
    }

    get Id(): number {
        return this.id;
    }

    set Id(id) {
        this.id = id;
    }

    get Username(): string {
        return this.username;
    }

    set Username(username) {
        this.username = username;
    }

    get Password(): string {
        return this.password;
    }

    set Password(password) {
        this.password = password;
    }

    get Email() {
        return this.email;
    }

    set Email(email) {
        this.email = email
    }
}
