// Inverted half pyramid

let n = 4;
for(let i=1;i<=n;i++){
    let pattern =""
    for(let j=n; j>=i;j--){
        pattern+="*";
    }
    console.log(pattern);
}

// let x = 4;
// for(let i=1;i<=x;i++){
//     let pattern =""
//     for(let j=1; j<=i;j++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }