const fs=require('fs') 
const path=require('path')
const jwt=require('jsonwebtoken')

const Job=require('../models/Job')
const Candidate=require('../models/Candidate')
const Application=require('../models/Application')

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET2,{expiresIn:'3d'})
}

exports.postSignup=async (req,res,next)=>{
    const {username,password,fullName,email}=req.body
    try{
        const newCandidate= await Candidate.signup(username,password,fullName,email)
        const token=createToken(newCandidate._id)
        res.status(200).json(newCandidate)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.postLogin=async (req,res,next)=>{
    const {username,password}=req.body
    try{
        const candidate= await Candidate.login(username,password)
        const token=createToken(candidate._id)
        res.status(200).json({username,token})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.postApply=async (req,res,next)=>{
    //const candidate=req.params.cid
    res.header("Access-Control-Allow-Origin", "*")
    //console.log(req.body.resume)
    const resume=req.body.resume
    const {candidate,jid,about}=req.body
    try{
        const app=await Application.create({candidate,job:jid,about,resume:resume})
        res.status(200)
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err.message})
    }   
}


