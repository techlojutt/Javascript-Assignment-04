//Write a js program to put even and odd elements of array in two separate array.

var array = [143,142,14,1244,2112341,214214,12343];
var returnEvenArray = array.filter((value)=>{
    if(value%2==0){
     return value ;
    }
})
var returnOddArray = array.filter((value)=>{
    if(value%2!=0){
        return value;
    }
})
console.log("Even Array =>",returnEvenArray,"Odd Array =>",returnOddArray);




