require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')


const app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const employerRouter=require('./routes/employer')
const candidateRouter=require('./routes/candidate')
const jobRouter=require('./routes/jobs')


app.use('/api/employer',employerRouter)
app.use('/api/candidate',candidateRouter)
app.use('/api/jobs',jobRouter)

app.get('/',(req,res,next)=>{
    res.json({msg:"hello"})
})


mongoose.connect(process.env.URI)
        .then(()=>{
            app.listen(process.env.PORT,()=>{
                console.log('connected to db and listening on',process.env.PORT)
            })
        })
        .catch(err=>{
            console.log(err)
        })