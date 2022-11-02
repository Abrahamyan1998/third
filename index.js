
function say(x){
    if(typeof x == "number" ){
        if(x%2==0){
            for(let i = 0; i<x; i++){
                if(i%2==0)
                console.log(`${i}-zuyg e`);
            }
            alert("the number is even")
        }
     
        if (x%2!==0){
            for(let i = 0; i<x; i++){
                if(i%2!==0)
                console.log(`${i}-kent e e`);
            }
            alert("the number is odd")
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


