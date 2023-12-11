var ans=new Promise((resolve, reject) => {
    return resolve("sbse phele ghar aao");
})

var p2=ans.then(function(data){
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("gate kholo or gate lagao");
    })
})

var p3=p2.then(function(data){
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("khana pkao or khana khaao :");
    });
})
var p4=p3.then(function(data){
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("sone jaa rha hu");
    })
})

p4.then(function(data){
    console.log(data);
})