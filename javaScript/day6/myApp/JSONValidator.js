function validateJSON(req,res,next){
try{
JSON.stringify(req.body);
return next();
}catch(error){
return res.status(400).json({msg:"send valid json!"})
}

}

module.exports = validateJSON;