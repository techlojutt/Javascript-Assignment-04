function countDuplicateElements(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        var count = 0 ;
        var value = arr[i]
        for (let j = i+1; j < arr.length; j++)
        {
            if (value==arr[j])
            {
                count++;
                arr.splice(j,1);
                j--;
            } 
        }
        if(count > 0)
        {
            console.log(`${value} has ${count} duplicate elements in this array`);
        }
    }
}
var array = [54,67,67,67,41,34,41,41]
countDuplicateElements(array);







