const array = ["Student1","Student2","Student3","Student4","Student5","Student6"];
function customSplice(array,position) {

 if (position > 0 && position < array.length) {

    for (var index = position; index < array.length-1 ; index++) {
          
        array[index] = array[index + 1];
    }
    array.length = array.length - 1  ;
}
else {
    console.log("position out of bonds");
}
}
customSplice(array,3);
console.log(array)