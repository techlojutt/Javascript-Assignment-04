//Write a js program to count total number of even and odd elements in an array.
function countEvenAndOddNumbersInAnArray(arr)
{
  var evenCount = 0;
  var oddCount = 0;
  for (let index = 0; index < arr.length; index++)
  {
   if(arr[index]%2==0)
    {
      evenCount++;
    }
    else if(arr[index]%2!=0)
    {
     oddCount++;
    }
  }  
  return{evenCount,oddCount};
}
var array = [12,13,14,15,16,215,42618,331,15453,654,23487];
var result = countEvenAndOddNumbersInAnArray(array)
console.log(result);

       
