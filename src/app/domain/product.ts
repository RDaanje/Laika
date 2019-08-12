export class Product {

    id: number; 
	name: string;
	supplier: string;
    stock: number;
    price: number;
    image: Blob;
    quantity: number;
    
     public Product() {} //this.quantity =1;

    
    
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
   
    getPrice(): number {
        return this.price;
    }
    setPrice(value: number) {
        this.price = value;
    }
    getImage(): Blob {
        return this.image;
    }
    setImage(value: Blob) {
        this.image = value;
    }


   
}
