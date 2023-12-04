const express=require('express')
const router=express.Router();

const emplyerController=require('../controllers/employer');
const { requireEmployerAuth } = require('../middleware/requireEmployerAuth');

router.post('/signup',emplyerController.postSignup)
router.post('/login',emplyerController.postLogin)
router.get('/jobs',emplyerController.getJobs)
router.use(requireEmployerAuth)
router.get('/protected',(req,res,next)=>{
    res.json({msg:"Protected"})
})
router.get('/applications',emplyerController.getApplications)
router.post('/create-job',emplyerController.postCreateJob)
router.post('/accept',emplyerController.postAccept)

module.exports=router;