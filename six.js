//this is one type
// function reversekaro(num){
//     return Number(num.toString().split("").reverse().join(""))
// }
// console.log(reversekaro(32));
var rev=0;
function reversekaro(num){
    while(num>0){
        var rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10)
        
    }
    return rev
}
console.log(reversekaro(1234));