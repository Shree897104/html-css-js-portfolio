var str="saare jahase accha hindhustan hamara";

var savedsrt=str.split(" ").map(function(e){
   return e.split("").reverse().join("")
})
console.log(savedsrt.join(" "));