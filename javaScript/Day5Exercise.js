const express= require('express');
const axios= require('axios');
const{ from}= require('rxjs');
const{ shareReplay}= require('rxjs/operators');

var port= 3000;

const app= express();
app.enable('trust proxy');
app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('etag');
app.set('x-powered-by',false);
app.listen(port, () => console.log(`listening on ${port}`));

let ob$ = from(axios.get('https://randomuser.me/api/?results=10')).pipe(shareReplay(1));

app.get('/',(req,res) => {
    res.set('Link', '<https://randomuser.me/api/?page=1&results=10&seed=abc>; rel=next ');
    res.set('Cache-Control', 'private,max-age=86400');
    ob$.subscribe(data => res.json(data.data));
});