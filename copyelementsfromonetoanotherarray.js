//copy all elements from an array to another array.
var array_1 = ["Shoaib","Bilal","Saad","Umair","Saljok","Tibiyan"];
var newCopyArr = ["Naveed","Ahmad","Ali"];
 array_1.forEach((value) => {
    newCopyArr.push(value);
})
console.log(newCopyArr);
