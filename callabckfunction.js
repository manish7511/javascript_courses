function sum(num1,num2,fnto){
    let result=num1+num2;
    fnto(result);
}
function displayresult(data){
    console.log("result of sum is: " + data);
}
function displayresultpassive(data){
    console.log("sum result is: ",+ data);
}
const ans=sum(1,2,displayresult);