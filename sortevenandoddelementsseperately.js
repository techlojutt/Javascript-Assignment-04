function sortEvenAndOddsSeperately(arr)
{
    var evenArr = [];
    var oddArr  = [];
    for (var i = 0; i < arr.length; i++) 
    {
        for (var j = 0; j < arr.length; j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp ;
            }
        } 
    }
    for (var k = 0; k < arr.length; k++)
    {
        if (arr[k]%2===0)
        {
            evenArr.push(arr[k]);
        }
        else if (arr[k]%2!==0)
        {
            oddArr.push(arr[k])
        }
    }
 var sortEvenOdd = ["Even =>",...evenArr,"Odd =>",...oddArr];
 return {sortEvenOdd} ;
}
var inputArr = [12,32,321,121,22,55]
var returnArr = sortEvenAndOddsSeperately(inputArr);
console.log(returnArr);