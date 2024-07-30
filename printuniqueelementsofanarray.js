function printUniqueElements(Uniquearray)
{
    var moreUniqueArray = [];
    for (let i = 0; i < Uniquearray.length; i++)
    { 
        var count = 0 ;
        var value = Uniquearray[i];
        for (let j = i+1; j < Uniquearray.length; j++)
        {
            if(value==Uniquearray[j])
            {
                count++;
                Uniquearray.splice(j,1)
                j--;
            }  
        } 
        
        if(count==0)
        {
            console.log(count);
            moreUniqueArray.push(value);
        }
    }
    return {Uniquearray,moreUniqueArray} ;
}
var array = ["Student1","Student2","Student1","Student4","Student9","Student4","Student7","Student1","Student2","Student4","Student1"];
var uniqueArrays = printUniqueElements(array);
console.log(uniqueArrays);