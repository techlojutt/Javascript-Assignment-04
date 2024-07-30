


function sortElementsInAscendingOrder(arr)
{
  for (var i  = 0; i < arr.length; i++)
 {
    for (var j = 0; j < arr.length; j++)
    {
      if (arr[j]>arr[j+1]) 
      {
       var temp = arr[j];
       arr[j] = arr[j+1];
       arr[j+1]= temp ;
      }
    }
  }
  var result = arr.slice();
  return result;
}

function sortElementsInDescendingOrder(array)
{
  for (var i  = 0; i < array.length; i++)
  {
    for (var j = 0; j < array.length; j++)
    {
      if (array[j]<array[j+1]) 
      {
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1]= temp ;
      }
    }
  }
  var result = array.slice();
  return result;
}
var array = [35,19,53,38];


var sortElementsInAscendingOrderResult = sortElementsInAscendingOrder(array);
var sortElementsInDescendingOrderResult = sortElementsInDescendingOrder(array);
console.log("Sorted Array In Ascending Order  =>",sortElementsInAscendingOrderResult);
console.log("Sorted Array In Descending Order =>",sortElementsInDescendingOrderResult);

