export class Account {

   

    constructor ( private _id: number,    
        private _username: string,
        private _password: string,
        private _email: string ) {}



    get id () : number {
        return this._id;
    }

    get username() : string {
        return this._username;
    }

    get password() : string {
        return this._password;
    }
    
    get email() : string {
        return this._email;
    }

}
