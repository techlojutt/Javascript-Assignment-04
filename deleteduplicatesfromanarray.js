function deleteDuplicateElements(array)
{
    for (let i = 0; i < array.length; i++)
    {
        for (let j = i+1; j < array.length; j++)
        {
            if(array[i]==array[j])
            {
                array.splice(j,1)
                j--;
            }
            
        }
        
    }
    return array ;
}
var duplicatedArray = [1,1,1,3,1,5,3,5,1,3,4,2,2,5,2,4,4,9];
var returnArray = deleteDuplicateElements(duplicatedArray);
console.log(returnArray);