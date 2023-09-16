function pali(str){
   var rev = str.split("").reverse().join("");
    if(rev==str)return true;
    else return false;
    }
    console.log(pali("lool"))
