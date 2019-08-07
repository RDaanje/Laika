export class Product {

    id: number; 
	private  name: string;
	private  supplier: string;
    private  stock: number;
    
    public Product() {}
    
    getId()    {
        return this.id;
    }

    setId(id: number)  {
        this.id = id;
    }

    getName()  {
        return this.name;
    }

    setName(name: string)    {
        this.name = name;
    }

    getSupplier()  {
        return this.supplier;
    }
   
    setSupplier(supplier: string)  {
        this.supplier = supplier;
    }

    getStock()     {
        return this.stock;
    } 

    setStock(stock: number)     {
        this.stock = stock
    }
   


   
}
