//Write a js program to count total number of negative elements in an array.
function minAndMaxElementsInAnArray(arr)
{
    var min = arr[0];
    var max = arr[0];
    for (let index = 0; index < arr.length; index++)
    {
        if(arr[index]<min)
        {
         min = arr[index] ;
        }
        else if(arr[index]>max)
        {  
         max = arr[index];
        }
    }
   return{min,max};
}
var array = [78,6433,9789,22,77,8,2,6,5,653,213,85];
var result = minAndMaxElementsInAnArray(array);
console.log(result);