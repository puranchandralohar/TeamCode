// let num = parseInt(process.argv[2]);

// if(num>10) {
//     console.log("Your Number is heigher than 10!");
// } 
// else if(num<=0){
//     console.log("You have entered 0 or -ve number!");
// }else{
//     for(i=1;i<=num;i++){
//         let pattern="";
//         for(j=1;j<=i;j++){
//            pattern+="*"; 
        
//         }
//         console.log(pattern);
        
//     }
// }


let rows = 5;
let no_8 = Math.ceil(rows/2);
let space = 0;
for(let i = 1;i<=rows;i++){
  let str = "";
  for(let j = 1 ; j<=no_8;j++){
    str += 8;
  }
  for(let j = 1 ; j<=space ;j++){
    str += " ";
  }
  for(let j = 1 ; j<=no_8;j++){
    str += 8;
  }
  if(i<Math.ceil(rows/2)){
    no_8 -= 1;
    space += 2;
  }else{
    no_8 += 1;
    space -= 2;
  }
  console.log(str)
}
