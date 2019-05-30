var events=require('events');

// var eventEmiiter = new events.EventEmitter();
// eventEmiiter.on('Boom', function(){
//     function display(){console.log('Athlete is working out')};
//     return setTimeout(display,1000);
// });
// eventEmiiter.emit('Boom');



class Gym extends events.EventEmitter{
 constructor(){
     super();
 }
}

let gym = new Gym();
gym.on('Boom', function(){console.log("Athlete is working out")});
    setInterval( () => gym.emit('Boom'),1000);

// module.exports= Gym;