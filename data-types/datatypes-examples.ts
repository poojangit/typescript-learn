//todo ---------Data types ------------

//^ String data type

//~ Example 1
//* Even if you dont specify the data type it will recognize as string because of typescript's type inference.

let firstName : string = "Pooja"
let lastName : string = 'N G'
let greet : string = `Hello ${firstName} ${lastName} Happy Birthday!!`
console.log(greet);
console.log(greet.toLowerCase());
console.log(greet.split(' '));

let userName : string | null = null
let email : string | undefined = undefined
console.log(userName);
console.log(email);

// let name1 : string 
// name1 = 123 //! Type number is not assigned to type string

function greetUser(firstName: string) : string{
 return `Hello ${firstName}`
}
console.log(greetUser("Pooja"));

//^ Number 

let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;       // hexadecimal
let binary: number = 0b1010;  // binary
let octal: number = 0o744;    // octal
let infinityVal: number = Infinity;
let notANumber: number = NaN;

let a : number = 10
let b : number = 20

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

let x: number = 10 / 0;   // Infinity
let y: number = "abc" as any * 2; // NaN
console.log(x);
console.log(y);

function double(num: number) : number {
    return num*2
}
console.log(double(5));
// console.log(double("7")); //! ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'

//^ boolean 

let isAvailable : boolean = true
let isDone : boolean = false

function canVote(age:number) : boolean {
    if(age<18){
        return false
    }
    return true
}
let result : boolean = canVote(76)
console.log(result);

//^ null

let emptyValue : null =  null
console.log(emptyValue);

let name1 : string | null =  null
console.log(name1);

function findUser(id : number) : string | null {
    if(id == 0) {
        return null 
    }
    return "User not found"
}
const user = findUser(9)
console.log(user);

//^ undefined

let x1 : undefined = undefined
console.log(x1);

let name2 : string | undefined
console.log(name2);

function logMessage(msg? : string) : void {
    console.log(msg);
}
logMessage()

//^ symbol

let sym1 : symbol = Symbol()
let sym2 : symbol = Symbol( "description")
console.log(sym1);
console.log(sym2);

const id : symbol = Symbol("userId")
let user1 = {
    name : "Pachuu",
    [id] : 1088
}
console.log(user1[id]);

let symA = Symbol("id")
let symB = Symbol("id")
console.log(symA === symB);

let sym = Symbol("token");0
console.log(sym.description); // token

const myIterable = {
    *[Symbol.iterator]() {
        yield 1
        yield 2
        yield 3
    }
}
for(let value of myIterable){
    console.log(value);
}

//^ bigint
//! bigint cannot be used with Math functions (Math.sqrt(10n) → ❌ error)

let big1 : bigint = 12223n
let big2 : bigint = BigInt(162516232636223)
console.log(big1);
console.log(big2);

const maxSafe: number = Number.MAX_SAFE_INTEGER; // 9007199254740991
const big: bigint = 9007199254740992n;

console.log(maxSafe + 1);  // 9007199254740992 (⚠️ possibly inaccurate)
console.log(big + 1n);     // 9007199254740993n ✅ accurate

//^ Objects 

let person: {
  name: string;
  age: number;
  isEmployed: boolean;
};

person = {
  name: "Bob",
  age: 25,
  isEmployed: false,
};

//^ arrays 

let numbers : number[] = [2,3,5,7]
let name3 : string[] = ["Pooja", "Preethi"]
console.log(name3);
console.log(numbers);


