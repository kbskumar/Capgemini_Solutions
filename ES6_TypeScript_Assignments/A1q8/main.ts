class Account{
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    totalBalance(){
        return this.balance;
    }
} 

class SavingAccount extends Account{
    constructor(id, name, balance, interest){
        super(id, name, balance = balance + (balance*interest)/100);
    }
}

class CurrentAccount extends Account{
    constructor(id, name, balance, cash_credit){
        super(id, name, balance = balance+cash_credit);
    }
}

let s1 = new SavingAccount(101, "Aditya", 1000, 10);
let c1 = new CurrentAccount(102, "Harsh", 14000, 2000);

console.log(s1.totalBalance()); // this will print 1100

console.log(c1.totalBalance()); // this will print 16000
