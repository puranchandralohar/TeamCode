// function sumRange(n,sum){       
//     if(n>=1){ 
//         sum = sum + n;
//         return sumRange(n-1,sum);        
//     }
//     return sum;
   
// }
// console.log(sumRange(4,0));


function sumOfRange(a,b,sum){
        if(a<=b){
            // sum=sum+a;
            sum = a+sumOfRange(a+1,b,sum);
            return sum;
        }
        return sum;
    }

console.log(sumOfRange(1,3,0));
