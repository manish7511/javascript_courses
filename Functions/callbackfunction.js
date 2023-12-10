function greet(a,b,operation){
    return operation(a,b);
}

const addition=greet(1,2,function(num1,num2){
    return num1+num2;
})

const subtraction =(a,b)=> a-b;
const subresult=greet(1,2,subtraction);
console.log(subtraction);