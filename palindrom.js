
let str="abbdbba"

function palindrome(str){
    let bag="";
    for(let i=str.length-1;i>=0;i++){
     bag+=i
   }
   return bag;
}
 
let reversed = palindrome(str);

if(str===reversed){
console.log("palindrome");
}else{
console.log("Not Palindrome")
}