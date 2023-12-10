function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}
function dosomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);

    return val1 + val2;
}

console.log(dosomething(2,2,square));
