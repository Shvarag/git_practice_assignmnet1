let num=79;
let flag=0;
for(let i=1; i<=num; i++){
    if(num%i==0){
        flag+=1
    }
    
}if(flag ==2){
    console.log("that is called prime number")
}else{
    console.log("hey this is not a prime no or you can say more then 2 factors number.")
}