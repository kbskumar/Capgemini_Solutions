class Order{
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice(){
        console.log("Price: "+this.price); 
    }
    printOrder(){
        console.log("Id: "+this.id "\nName: "+this.name"\nPrice:"+this.price);
    }
}

var o = new Order(101, "Biryani", 120);
o.getPrice();   // this will return the price i.e. 120
o.printOrder(); // this will return all the order details


var o2 = new Order(102, "Naan", 15);
o2.getPrice(); // this will return the price i.e. 15
o2.printOrder(); // this will return all the order details