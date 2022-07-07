function add(message,callback){
    console.log(message);
     return callback();
}

function sum(a,b){
    return a+b;
}

let x = add("addition",()=>sum(4,10));
console.log(x);