function findsum(n){
    let ans=0;
    for(i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}

function finsum100(){
    console.log(findsum(100));
}

setTimeout(finsum100,10000)
    console.log("hello world")
