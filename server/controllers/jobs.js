const mongoose=require('mongoose')
const Job=require('../models/Job')
const Employer = require('../models/Employer')

exports.getJobs=async (req,res,next)=>{
    //console.log('hi')
    //console.log(jobs)
    try{
        const allJobs=await Job.find()
        res.status(200).json(allJobs)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.getJobDetail=async (req,res,next)=>{
    const jid=req.params.jid;

    try{
        const job=await Job.findById(jid)
        res.status(200).json(job)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

