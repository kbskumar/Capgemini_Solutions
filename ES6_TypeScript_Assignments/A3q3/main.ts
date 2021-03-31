interface Printable{
    print();
}

class Circle implements Printable{
    constructor(radius){
        this.radius = radius;
        this.area = 3.18*radius*radius;
    }
    print(){
        console.log(this.radius);
        console.log(this.area);
        
         
    }
}

class Employee implements Printable{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    print(){
        console.log("Id: "+this.id+" \nName: "+this.name);
        
    }
}

let c1 = new Circle(2);
let e1 = new Employee(101,"Timmy");

function PrintAll(obj1, obj2){
    obj1.print();
    obj2.print();
}
PrintAll(c1,e1);