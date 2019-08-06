
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

    euro: number;
    coins: number;


    getid(): number {
        return this.id;
    }

    setid(id) {
        this.id = id;
    }

    getusername(): string {
        return this.username;
    }

    setusername(username) {
        this.username = username;
    }

    // get password(): string {
    //     return this._password;
    // }

    // set password(password) {
    //     this.password = password;
    // }

    getemail() {
        return this.email;
    }

    setemail(email) {
        this.email = email
    }
}
