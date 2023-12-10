//  string related functions

// string:  length,  indexof(),  lastindexof() , slice(),  substring()  , replace()
//  split(), trim() , toUppercase(), toLowercase(),etc...

// run each function to see the output,play and learn by doing.

// length
function getlength(str){
    console.log("original string:",str)
    console.log("original string:",str.length)

}
getlength("hello world: ")

//  indexof
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("Hello");
console.log(result)


//  lastIndexOf

let tex = "Hello planet earth, you are a great planet .";
let res = tex.lastIndexOf("planet");
console.log(res)

//  slice()

let ext = "Apple, Banana, Kiwi";
let part = ext.slice(0,7);
console.log(part)

// substring

let t1 = "Hello world!";
let r1 = t1.substring(12,6-2);
console.log(r1);

//  replace
let t2 = "Mr manish has a blue house and a blue car and  blue shoes";
let r2 = t2.replace(/blue/gi,"red");
console.log(r2);

//  search ()

let t3 = "Mr. Blue has a blue house";
let position = t3.search("/blue/i");
console.log(position);

// split()

let t5 = "How are you doing today?";
const myArray = t5.split("a");
console.log(myArray);

// startwith()

let t6 = "Hello world, welcome to the universe.";
q=t6.endsWith("universe.");
console.log(q);

//  tolowercase 
let x = "Hello World!";
let st = x.toLowerCase();
console.log(st);

//  toUpper case

let str="manish"
let u=str.toUpperCase();
console.log(u);


//  trim()

let s="    manish singh  "
let e=s.trimStart();
console.log(e);