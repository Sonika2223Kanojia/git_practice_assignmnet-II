

function prime(Num){
let c=0;
 for(let i=i;i<=Num;i++){
   if(Num % i==0 ) {
     c++;
    }
  if(c==2){
    return true;
  }
 return false
   
}


let ans = prime(14);
if(ans==true){
console.log("prime");
}else{
console.log("not a prime")
}

