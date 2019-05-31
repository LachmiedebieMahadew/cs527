const fs= require('fs');
const path=require('path');
const url= require('url');

let prepareData = (inComingUrl) => {
var read= fs.createReadStream(path.join(__dirname, inComingUrl.url));
let data= '';
read.on('data', (chunk) => {data+=chunk;});
read.on('end', () => {
process.send(data);
process.exit(1);
});
}

process.on('message', (receivedURL) => {
if(receivedURL.url){
prepareData(receivedURL)
}
});