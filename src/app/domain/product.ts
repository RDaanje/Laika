export class Product {

    id: number; 
	private  name: string;
	private  supplier: string;
    private  stock: number;
    private  price: number;
    private image: string;
    
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
   
    public get Price(): number {
        return this.price;
    }
    public set Price(value: number) {
        this.price = value;
    }
    public get Image(): string {
        return this.image;
    }
    public set Image(value: string) {
        this.image = value;
    }


   
}
