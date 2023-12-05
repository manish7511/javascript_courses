const prompt=require("prompt-sync")();
function greet(firstname,gender){
    if(gender==='male'){
        console.log("Hello Mr "+ firstname+"!");
    }
    else if(gender==='female'){
        console.log("hello Ms "+ firstname +'!')
    } 

}
firstname=prompt("enter username ")
gender=prompt("Enter gender ")
greet(firstname,gender)