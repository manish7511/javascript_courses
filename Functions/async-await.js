function abcd(){
    fetch('https://randomuser.me/api/')
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })
}

abcd();