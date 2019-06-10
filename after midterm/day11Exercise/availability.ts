
export function addAvailibilty(a:Boolean){
return function (targetClass:Function){
   return class{
       availible:Boolean=a;

   }
}
}