export class Account {

   

    constructor (  
        private _username: string,
        private _password: string,
        private _email: string ) {}


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
