//todo --------------Data types ------------------

//^ 🔢 All Data Types in TypeScript
//^ We'll divide them into three categories:

//^ 1. 🔹 Primitive Types
//! These are the same as in JavaScript but with static typing.

//! string	let name: string = "Alice";
//! number	let age: number = 25;
//! boolean	let isAdmin: boolean = true;
//! null	let n: null = null;
//! undefined	let u: undefined = undefined;
//! symbol	let sym: symbol = Symbol();
//! bigint	let big: bigint = 123n;

///^ 2. 🔸 Object Types & Special Structures

//! object	let obj: object = { name: "John" };
//! array	let nums: number[] = [1, 2, 3]; or Array<number>
//! tuple	let tuple: [string, number] = ["age", 30];
//! enum	enum Role { Admin, User }; let r: Role = Role.Admin;
//! class	OOP style: class Person {}
//! interface / type	Custom types (covered below)
//! function	let f: (a: number, b: number) => number

//^ 3. 🧠 Advanced & Utility Types
//! ✅ Union Type

//let id: number | string = 101; // can be number or string

//! ✅ Intersection Type

// type A = { name: string };
// type B = { age: number };
// type C = A & B;
// const person: C = { name: "John", age: 30 };

//! ✅ Literal Types

// let direction: "left" | "right" = "left";

//! ✅ any (Avoid if possible)

// let something: any = "text"; // disables type checking

//! ✅ unknown

// let data: unknown;
// data = 10;
// data = "text";
//  safer than `any`, must check type before use

//! ✅ never

// function error(msg: string): never {
//   throw new Error(msg);
// }

//! ✅ void

// function log(msg: string): void {
//   console.log(msg); // no return value
// }

//^ 4. 🧰 Utility Types (Built-in Helpers)
//! These are helpful for manipulating types:

//! Partial<T>	Makes all properties in T optional
//! Required<T>	Makes all properties required
//! Readonly<T>	Makes all properties read-only
//! Pick<T, K>	Picks a subset of properties
//! Omit<T, K>	Omits specified properties
//! Record<K, T>	Creates object with specific key-value structure
//! ReturnType<T>	Gets the return type of a function
//! Parameters<T>	Gets parameter types of a function

