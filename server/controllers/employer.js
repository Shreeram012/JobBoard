const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const ejobs=require('../data/ejobs.json')
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const Job=require('../models/Job')
const Employer=require('../models/Employer')
const Application = require('../models/Application')
const Candidate = require('../models/Candidate')

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

exports.postSignup=async (req,res,next)=>{
    const {username,password}=req.body
    try{
        const newEmployer= await Employer.signup(username,password)
        const token=createToken(newEmployer._id)
        res.status(200).json({username,token})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.postLogin=async (req,res,next)=>{
    const {username,password}=req.body
    try{
        const employer= await Employer.login(username,password)
        const token=createToken(employer._id)
        res.status(200).json({username,token})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.postCreateJob=async (req,res,next)=>{
    const {title,desc,type,location,lastDate}=req.body
    //console.log(title,desc,type,location,lastDate)
    const token=req.headers.authorization.split(' ')[1]
    const {_id}=jwt.verify(token,process.env.SECRET)
    const employer=_id
    const e=await Employer.findOne({_id}).select('username')
    try{
        const newJob= await Job.postJob(title,employer,e.username,desc,location,type,lastDate)
        res.status(200).json(newJob)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
    //console.log(eid,title)
}

exports.getJobs=async(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1]
    const {_id}=jwt.verify(token,process.env.SECRET)
    const employer=_id
    try{
        const jobs=await Job.find({employer})
        res.status(200).json(jobs)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.getApplications=async (req,res,next)=>{

    const {jid}=req.body
    try{
        const app=await Application.find({jid})
        //console.log(app)
        const appl=app
        //console.log(app)
        res.status(200).json({application:appl})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
exports.getCandidate=async (req,res)=>{
    const {candidate}=req.body
    try{
        const can=await Candidate.find({_id:candidate})
        res.status(200).json({can})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.postAccept=async (req,res)=>{
    console.log(req.body)
    const {employer,aid,role} =req.body
    const app=await Application.findOne({_id:aid})
    const cid=app.candidate
    const can=await Candidate.findOne({_id:cid})
    var data = {
        service_id: 'service_0ru81hf',
        template_id: 'template_lfc76w8',
        user_id: 'Un7kUt00F2MhYRo8d',
        template_params: {
            'to_email':can.email,
            'employer': employer,
            'candidate':can.fullname,
            'role':role
        }
    };
     
    await $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        console.log('Your mail is sent!');
    }).fail(function(error) {
        console.log('Oops... ' + JSON.stringify(error));
    });

    await Application.deleteOne({_id:aid})
}