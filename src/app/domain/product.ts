export class Product {

    public id: number; 
	private  name: string;
	private  supplier: string;
    private  stock: number;
    public  price: number;
    private image: Blob;
    public quantity: number;
    
    public Product() {this.quantity =1;}

    
    getId()    {
        return this.id;
    }

    setId(id: number)  {
        this.id = id;
    }

    getQuantity(){
        return this.quantity;
    }

    setQuantity(quantity){
        this.quantity =quantity;
    }

    plusQuantity(product: Product){
        product.quantity=(this.quantity+1);
        return product;
    }

    minQuantity(){
        this.quantity=(this.quantity-1);
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
    public get Image(): Blob {
        return this.image;
    }
    public set Image(value: Blob) {
        this.image = value;
    }


   
}
