


// server.on('request',(request,response)=>{
//   //  request.url ====== http://nhgfhjtry?jytrty=htrjh
//     var childProcess= fork('file')
//     childProcess.send('asaad')
//     childProcess.on('message', d=>)
// });

// process.on('message', d=>)
// process.send('saad')



const {Subject} =require('rxjs');
const http= require('http');
const {fork}=require('child_process');
const url=require('url');


const subject= new Subject();

function sendTochildNode(requestObject){
     let {query}= url.parse(requestObject.req.url,true);
     let childProcess=fork('Day4Child.js');
     childProcess.send(query);
     childProcess.on('message',data => requestObject.res.end(data));
};

subject.subscribe(sendTochildNode);


http.createServer(
        (request,response)=>{subject.next({
                                        req:request, res:response })}).listen(4000);





