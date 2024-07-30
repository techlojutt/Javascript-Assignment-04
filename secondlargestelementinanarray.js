function minAndMaxElementsInAnArray(arr)
{
    var max = arr[0];
    for (let index = 0; index < arr.length; index++)
    {
        if(arr[index]>max)
        {  
         max = arr[index];
        }
    }
   return max;
}
function secondLargestElementInAnArray(arr)
{
   var result =  minAndMaxElementsInAnArray(arr);
   var secondLargestElement = arr[0];
   for (let index = 0; index < arr.length; index++)
    {
        if(arr[index]>secondLargestElement&&arr[index]<result)
        {
            secondLargestElement = arr[index];
        }
    }
    return secondLargestElement;
    
}
var array = [78,9789,22,77,8,2,6,5,653,213,85,43546];
var finalResult = secondLargestElementInAnArray(array);
console.log("Second Largest Element Of An Array =>",finalResult);