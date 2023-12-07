const alluser=[{
    firstname:"manish",
    gender:"male"
},{
    firstname:"sinku",
    gender:"male"

},{
    firstname:"harshita",
    gender:"female"
}]
for(let i=0;i<alluser.length;i++){
    if(alluser[i]["gender"]=="male"){
        console.log([i]["firstname"]);
    }
}