export class Product {

    id: number; 
	private  name: string;
	private  supplier: string;
    private  stock: number;
    
    public Product() {}
    
    get Id()    {
        return this.id;
    }

    set Id(id: number)  {
        this.id = id;
    }

    get Name()  {
        return this.name;
    }

    set Name(name: string)    {
        this.name = name;
    }

    get Supplier()  {
        return this.supplier;
    }
   
    set Supplier(supplier: string)  {
        this.supplier = supplier;
    }

    get Stock()     {
        return this.stock;
    } 

    set Stock(stock: number)     {
        this.stock = stock
    }
   


   
}
