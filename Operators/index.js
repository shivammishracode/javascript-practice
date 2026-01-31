// // arithmatic operators , comparison , logical , assignment , unary , ternary

// //arithmatic operator

// console.log(2+1)  //3
// console.log("2"+1) //"21"
// console.log(2-1)  // 1
// console.log("2"-1) // 1
// console.log(2*1)  //2
// console.log(2**4)  //16
// console.log(10/2)  // 5
// console.log(10%2)  // 0


// // assignment operator and comparison operator

// let a=5
// // a+=5
// // a-=5
// // a*=5
// // a/=5
// let b=5
// let s="5"
// console.log(a===s) //check dataype plus value
// console.log(a==s)// check only value
// console.log(a>6) // false
// console.log(a<3) // false
// console.log(a==5) // true
// let m=10
// console.log(a>=m) //false
// console.log(m<=a) // false
// console.log(a==m) // false
// console.log(a<=m) // true
// console.log(a!=m)// true
// console.log(a!==m)// true

// const flag1=5
// const flag2="5"

// console.log(flag2!=flag1) //flase
// console.log(flag2!==flag1) //true



// // logical operators
//  console.log(true&&true) // true
//  console.log(true&&false) // false
//  console.log(false&&true) // false
//  console.log(false&&false) // false

//   console.log(true||true) // true
//  console.log(true||false) // true
//  console.log(false||true) // true
//  console.log(false||false) // false

//  console.log(!true)  // flase
//  console.log(!false)  //true


// unary operator 

// console.log(typeof("10"))
// console.log(typeof(+"10"))
// console.log(-"10")
// console.log(+"10")
// console.log(!12)
// console.log(!!12)

// let a=10;         //increase      //print
// console.log(++a) //11 -->11
// console.log(a++) //12 -->11
// console.log(--a) //10-->11
// console.log(a--) //9-->11
// console.log(++a) //11-->9
// console.log(a) //11


//turnary operator
//  condition ? true hui ka code: false hui ka code 

14>13? console.log("true"): console.log("false")

// instANCEOF 

let a=[1,2,3]
console.log(a instanceof Array)

let person={
    name:"shivam",
    id:123
}

console.log(person instanceof Object)


let num=567;
console.log(num instanceof Number)
