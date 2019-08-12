export class Product {

    id: number; 
	name: string;
	supplier: string;
    stock: number;
    price: number;
    image: Blob;
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
   
    public getPrice(): number {
        return this.price;
    }
    public setPrice(value: number) {
        this.price = value;
    }
    public getImage(): Blob {
        return this.image;
    }
    public setImage(value: Blob) {
        this.image = value;
    }


   
}
