// Find Even Number in an array

function getEven(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
    }
}
getEven([2,3,7,6,5,8,9,11]);
