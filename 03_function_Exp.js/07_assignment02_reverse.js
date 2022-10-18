console.log("===============Reverse string using charAT==========");
function reverseString(arg){
    var lengthStr = arg.length -1;
    var reverseStr ="";
    for (let index=lengthStr; index>=0; index--){
        reverseStr =reverseStr + arg.charAt(index)
    }
    console.log(`${reverseStr}`);

}
console.log("Hard work always pays back: ");
reverseString("Hard work always pays back");
console.log("----------------------------------");
console.log("Soon I will be Angular IT Champ: ");
reverseString("Soon I will be Angular IT Champ");