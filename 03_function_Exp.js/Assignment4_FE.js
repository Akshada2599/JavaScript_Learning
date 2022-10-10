//Sqaure of the no:

    var square = function(value){              
        var square=value * value; 
        console.log("square of numbers:" +square);           
            
    }

square(11);
square(27);
console.log("**********************************");


//Area of triangle

var areaTriangle=function(base,height)
{
    var area=(base*height)/2;
    console.log("area of triangle is",area);
}
areaTriangle(45,34);
console.log("********************************");


var areaReactangle=function(length,width)
{
    var area=length*width;
    console.log("area of reactangle is",area);
}
areaReactangle(499,917);
console.log("********************************");

function swap_values(arg1,arg2){
    console.log("***********Before swap*********");
    console.log(arg1,arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("**************After Swap**********");
    console.log(arg1,arg2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000);


var stringUse= "Javascript is  most   popular    language"
{
console.log("Javascript is most popular languge");

console.log("Total character available in the string:");
var len = stringUse.length;
console.log(len);

console.log("Find the index of string of 'lang':");
console.log(stringUse.indexOf("lang"));

console.log("Find the index of character 's':");
console.log(stringUse.indexOf("s"));


console.log("Find the 3rd last character using length property:");
console.log(stringUse.charAt(stringUse.length-3));

console.log("Find the first last character using length property:");
console.log(stringUse.charAt(stringUse.length-1));
console.log("********************************");
}

