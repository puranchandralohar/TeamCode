// Find Even Number in an array

function getEven(arr){
    let evenArray = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
           evenArray.push(arr[i]); 
        }
    }
    if(evenArray.length == 0){
        console.log("NO data found")
    }     else{

        console.log(evenArray);
    }
}
getEven([3,7,29,41]);

let arr = [1,2,4,"HEllo"];
// let arr3 = arr.map((ele)=>{
//     return(ele*10);
// })
// console.log(arr3)

let arr2 = arr.filter((ele)=>ele%2==0);
console.log(arr2);