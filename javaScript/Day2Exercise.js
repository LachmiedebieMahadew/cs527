

 Array.prototype.pluck= function(n){
  let max=this[0];
  let min=this[0];
  for(let i= 0; i<this.length; i++){
      if(max<this[i]){
          max=this[i];
      }
      if(min>this[i]){
        min=this[i];
    }
  }
  if(n){
    process.nextTick(()=> console.log(max));
  }
  else{
    setImmediate(() => console.log(min));
  }
 };


 console.log("start");
[1,2,,3,4,5,6,7,8].pluck(true);
[1,2,,3,4,5,6,7,8].pluck(false);
 console.log("finish");
