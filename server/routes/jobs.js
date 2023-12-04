const express=require('express')
const router=express.Router();

const jobsController=require('../controllers/jobs')

router.get('/joblist',jobsController.getJobs)
router.get('/:jid',jobsController.getJobDetail)

module.exports=router;