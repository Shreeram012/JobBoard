const express=require('express')
const router=express.Router();

const candidateController=require('../controllers/candidate');
const { requireCandidateAuth } = require('../middleware/requireCandidateAuth');

router.post('/signup',candidateController.postSignup)
router.post('/login',candidateController.postLogin)
router.post('/apply',candidateController.postApply)

router.use(requireCandidateAuth)
router.get('/protected',(req,res,next)=>{
    res.json({msg:"Protected"})
})


module.exports=router