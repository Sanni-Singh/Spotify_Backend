const { singupModel, loginModel } = require("../model/user.model");

const singup = (req,res)=> {
    const {name ,email,password,profile} = req.body;
    singupModel(name,email,password,profile,(err,data)=> {
      if(err) res.status(400).json({status:false,message:'something went wrong'})
      else res.json({status:true,data})
    })
}
const login = (req,res)=> {
    const {email,password} = req.body;
    loginModel(email,(err,data)=> {
        console.log(data);
        
        if(err || !data) res.status(401).json({status:false,message:'No Account detected'})
        else {
            if(email == data.email && password == data.password)res.json({status:true,email:data.email,name:data.name,profile:data.profile})
            else  res.status(401).json({status:false,message:'Wrong Login credintails'})
        }
    })
}

module.exports = {singup,login};