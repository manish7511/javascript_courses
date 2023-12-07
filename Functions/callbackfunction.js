function greet(a,b,operation){
    return operation(a,b);
}

function manish(){
    console.log("i a am callback function");
}

greet(1,2,manish);