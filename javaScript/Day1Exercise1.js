
/*Exercise 1:
Define a removeNum function that will work asyncronuosly on every Array object. the function accepts 1 argument,a number
the function returns a new array after removing all istances of the passed number.
*/

Array.prototype.removeNum = function (num) {
   const arr = this;
   return new Promise((resolve, reject) => {
       resolve(arr.filter(x => x !== num))
    })
};
function myFunction(testarray) {

   testarray.removeNum(1)

       .then(function (result) {

           console.log(result);
       })
};
console.log("Answer of first exercise of Day 1");
console.log("Start");
console.log([1,3,4,2,1,5].removeNum(1).then(function (result) { console.log(result) }));
console.log("Finish");

