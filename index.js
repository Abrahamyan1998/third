
function say(x){
    if(typeof x == "number" ){
        if(x%2==0){
            console.log(`${x}-zuyg e`);
            alert("the number is even")
        }
     
        if (x%2!==0){
            alert("the number is odd")
            console.log(`${x}-kent e`);
        }
    }
    else{
        alert("not a number")
    }
}

function call(){
let prom = +prompt("Enter number");
    if (isNaN(prom)){
        alert("not a number");

        say(+prompt("Enter number"));
    }
    else {
        say(prom);
    }
}

call()


