
export class Account {
    private _id : number;
    username: string;
    password: string;
    email: string;
   
    get id(): number {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
}
