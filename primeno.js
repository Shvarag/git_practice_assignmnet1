let num=79;
let flag=0;
for(let i=1; i<=num; i++){
    if(num%i==0){
        flag+=1
    }
    
}if(flag ==2){
    console.log("prime")
}else{
    console.log("not prime")
}