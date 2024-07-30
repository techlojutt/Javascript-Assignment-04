//Write a js program to count total number of negative elements in an array.
function countNegativeElementsInAnArray(arr)
{
  var negativeElementsCount = 0 ;
  for (let index = 0; index < arr.length; index++)
    {
        if(arr[index]<0)
        {
          negativeElementsCount++;
        }
    }
    return negativeElementsCount++;
}
var array = [21,-21,-23,-13,-1253,123,13,42];
var result = countNegativeElementsInAnArray(array);
if(result)
{
    console.log("Negative Elements :",result);
}
else 
{
    console.log("No negative element exists in this array");
}


