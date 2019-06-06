// var studied= true;

// var willPass= function(){
//                 return new Promise(function(res,rej){
//                     if(studied){
//                         res("Pass");
//                     }
//                     else rej('Fail');
//                 })
// }

// var askMe= function(){
//     willPass(). then((data)=>console.log(data))
//              .catch((err)=> console.error(err));
// }

// askMe();
// console.log('Finish');

// using async await
/*   .................. Using Async await ........................*/
// var studied= true;
// var willPass= ()=>{ return new Promise(
//             (res,rej)=> {
//                 if(studied){
//                     res('Pass');
//                 }
//                 else rej('Fail')
//             }
// )};

// async function askme(){
//     try{console.log('before starting exam ');
//          let results=await willPass();
//          console.log(results);
//          console.log('after taking exam ');
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// askme();
// console.log('finish');
/*   ..................Non Blocking Code  using settimeout........................*/

// const add= (a,b)=> {
//    setTimeout( () =>{for (let i=0; i<9e7;i++){ console.log(i)}
//     console.log(a+b);
//    },0)
// }


// console.log("Start");
// add(1,2);
// add(2,4);
// add(5,6);
// console.log("End");
/*   .................. Order of execution ........................*/


// var order=()=>{
//     new Promise((res,rej)=>{ res("Promise")}).then((result)=> console.log(result));
//     setTimeout(() => {console.log("setTimeout")},0);
//     setImmediate(() => {console.log("setImmediate")});
//     queueMicrotask(()=> console.log("queueMicrotask"));
//     process.nextTick(()=> console.log("nextTick"));
// }

// order();


































