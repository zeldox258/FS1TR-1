class People {
    static PIValue = Math.PI;
    static Population = 0;
    constructor(firstName, lastName, age, weight, height) {
        this._firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.weight = weight;
        this.height = height;
        People.Population++;
    }

    printAllInformation = () => {
        console.log('My name is', this._firstName, this.lastName, 'and I am',
        this.age, 'years old. My weight is', this.weight, ' kg and my height is', this.height, 'cm');
    }

    static add = (a,b)=>{
        return a + b;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(newName){
        this._firstName = newName;
    }


    static printAllInformation2 = () => {
        console.log('My name is', this.firstName, this.lastName, 'and I am',
        this.age, 'years old. My weight is', this.weight, ' kg and my height is', this.height, 'cm');
    }
    
}


let person1 = new People("Sergen", "Ucar", 29, 85, 183);
let person2 = new People("Okkes", "Akkurt", 28, 70, 185);
let person3 = new People("Alp Eren", "Turk", 24, 85, 183);
let person4 = new People("Omer Can", "Soyu", 24, 68, 181);
let person5 = new People("Huseyin Omer", "Guray", 23, 106, 179);

person1.printAllInformation();
console.log(person1);


console.log(People.add(3,5));
People.printAllInformation2();


console.log("Our Population is :",People.Population);


console.log(person1.firstName);




class worker extends People{
    constructor(firstName, lastName, age, weight, height,role){
        super(firstName, lastName, age, weight, height);
        this.role = role;
        
    }

    printAllInformation = () => {
        console.log('My name is', this._firstName, this.lastName, 'and I am',
        this.age, 'years old. My weight is', this.weight, ' kg and my height is', this.height, 'cm', "My current role is :",this.role);
    }
}


const worker1 = new worker("Huseyin Omer", "Guray", 23, 106, 179,'student');

console.log(worker1);
console.log(worker.add(3,5));


console.log("Our Population is :",worker.Population);
worker1.printAllInformation();



console.log(worker1 instanceof People);
console.log(worker1 instanceof worker);
console.log(person1 instanceof People);
console.log(person1 instanceof worker);




