var fs = require('fs');
var path=require('path');

// Using readFileSync
var read1= fs.readFileSync(path.join(__dirname,'big.file'),'utf8');
console.log(read1);

//Using readfile
var read2= fs.readFile(path.join(__dirname,'big.file'),{encoding:'utf-8'},(err,data) => console.log(data));

//Using streams
var read3=fs.createReadStream(path.join(__dirname,'big.file'),{encoding:'utf8'});
read3.on('data',(result)=>console.log(result));