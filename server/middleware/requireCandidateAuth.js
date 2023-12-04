const jwt=require('jsonwebtoken')
const Candidate = require('../models/Candidate')

exports.requireCandidateAuth=async (req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status(401).json({error:'authorization required'})
    }

    const token=authorization.split(' ')[1]
    try{
        const {_id}=jwt.verify(token,process.env.SECRET2)
        req.candidate=await Candidate.findOne({_id}).select('_id')
        next() 
        
    }
    catch(err){
        return res.status(401).json({error:'Request is not authorized'})
    }
}