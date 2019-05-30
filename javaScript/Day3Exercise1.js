/* Exercise 1. Create a node script that converts www.mum.edu domain name to the equavalent Ip address.
 */

 const dns=require('dns');
 const util= require('util');
 //dns.resolve4('www.mum.edu', (error, data) => {console.log(data)});
 const promiseResolve= util.promisify(dns.resolve4)
 // promiseResolve.then( (error, data)=>{console.log(data)});

 async function myResolver(){
    const result= await promiseResolve('www.mum.edu');
    console.log(result);
 }

 myResolver();