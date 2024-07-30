function frequencyOfEachElementinAnArray(array)
{
    for (var i = 0; i < array.length; i++)
    {
        var value  =   array[i] ;
        var count = 1 ;
        for (var j = i+1; j < array.length; j++) 
        {
            if(value==array[j])
            {
                count++;
                array.splice(j,1);
                j--;
            }      
        }
      console.log(value,count); 
    }
}

var array = ["Student1","Student2","Student2","Student1","Student3","Student2","Student1","Student3","Student4"];
frequencyOfEachElementinAnArray(array);
