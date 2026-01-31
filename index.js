// datatypes in javascript 

// let number = 12345;
// let flag = true;
// let name = "Shivam Mishra";
// let x;
// let data = null;
// let id = Symbol("id");
// let big = 12345678901234567890n;

// console.log(`number: ${number}, boolean: ${flag}, name: ${name}, x: ${x}, data: ${data}, id: ${id.toString()}, big: ${big}`);


//concatenation

console.log("5"+1);  //"51"

// addition

console.log(1+1); //2

//subtraction

console.log("5"-1)  //4  beacuse subtraction do only subtracting the operands here js convert string into number then subtract

// implicit type conversion 

console.log(true + 1);  // 2     (true = 1)
console.log(false + 1); // 1     (false = 0)

//explicit type conversion 

console.log(Number("10"));     // 10
// Number(true);     // 1
// Number(false);    // 0
// Number("abc");    // NaN
// String(100);      // "100"
// String(true);     // "true"
// Boolean(1);       // true
// Boolean(0);       // false


//truthy and falsy value 

// Boolean("");      // false --> NaN document.all  null "" 0 all are false value
// Boolean("Hi");    // true -->

let user;
console.log(user);

let user2= null;
console.log(user2);
