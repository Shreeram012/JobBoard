const jwt=require('jsonwebtoken')
const Employer=require('../models/Employer')

exports.requireEmployerAuth=async (req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status(401).json({error:'authorization required'})
    }

    const token=authorization.split(' ')[1]
    try{
        const {_id}=jwt.verify(token,process.env.SECRET)
        req.employer=await Employer.findOne({_id}).select('_id')
        next() 
        
    }
    catch(err){
        return res.status(401).json({error:'Request is not authorized'})
    }
}