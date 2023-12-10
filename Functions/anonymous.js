function dosomething(a,b,fn){
    console.log(a);
    console.log(fn);
    const val1=fn(a);
    const val2=fn(b);

    return val1 + val2;
}

console.log(dosomething(2,2,function(n){
    return n*n;
}));
