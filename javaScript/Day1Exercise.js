

 fetch("https://randomuser.me/api/")
 .then(function(result){
    return result.json();
   
 })
 .then(function(data){
   console.log(data.name);
  console.log(data.loaction);
 })
 ;
