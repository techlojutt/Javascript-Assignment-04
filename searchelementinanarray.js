function searchElementInAnArray(element,array)
{
    for (let index = 0; index < array.length; index++)
    {
        if (array[index] === element)
        {
            
            return {index };
        }
    }
    
}
var array = ["Student1","Student2","Student3","Student4","Student5","Student6","Student4"];
var element = "Student4"
var returnindex = searchElementInAnArray(element,array);

if(searchElementInAnArray(element,array))
{
    console.log(`${element} is found at`,returnindex);
}
else
{
    console.log("This element is not exist in this array");
}