let n =5;

for(let i=1;i<=n;i++){
    let pattern ="";
    for(j=1;j<=i;j++){
        if(i==1 || j==1 || i==n || j==n){
        pattern += "* ";
        }
    }
    console.log(pattern);
}