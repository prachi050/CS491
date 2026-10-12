
let isIceCreamCold = true;


let king = 23;


let color = "blue";


let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];


const nbMonth = 12;

console.log("Number ", king)

console.log(`Number ${king}`) 

console.log(`Number ${king*2}`) 


function add(a, b){
    return a + b;
}
console.log('Function add:', add(2, 3))


let added = function (x, y) { return x + y };
console.log('Function added:', added(2, 3))

class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

let boss = {
    name: "Michael Scott",
    phone: "555-555-5555",
    address: "Scranton, PA"
}
console.log("The world's best boss is:", boss.name, boss.phone, boss.address);


let bestBoss = boss;
boss.phone = "+1555-555-555";
console.log("The world's best boss is still:", boss.name, boss.phone, boss.address)


let newBoss = { ...boss }
newBoss.name = "Andy Bernard"
console.log("The new boss is:", newBoss.name, newBoss.phone, newBoss.address)
console.log("The world's best boss remains:", boss.name, boss.phone, boss.address)

let sayHi = () => {return "Hello!!!"};

function sayHi_other() {return "Hello!!!"};

let mult2_e = x => 2 * x;

function mult2_other(x){return 2*x}


let myarray = ['Microsoft', 'Google']


console.log('Printing the array with map')


let printIt = (value) => console.log(value)


myarray.map(printIt)



let numberarray = [1, 6, 7.5]; 

let mult22 = (x) => x * 22; 

let newarray = numberarray.map(mult22); 

console.log(newarray);


let nums = [1, 2, 5, 6, 10, 20, 100, 200];


const smallNums = nums.filter((elt) => elt < 20);

var items = ["1", "2", "3"];
function printStuff(a, b, c) {
  console.log("Printing: " + a + " " + b + " " + c);
}

printStuff(...items);


printStuff(items[0], items[1], items[2]);





