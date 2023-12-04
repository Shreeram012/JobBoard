const mongoose=require('mongoose')
const Schema=mongoose.Schema

const jobSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    employer:{
        // type: Number,
        // required: true
        type:Schema.Types.ObjectId,
        ref:'Employer'
    },
    employername:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    location:{
        type:String,
        required:true
    },
    type:{
        type:Boolean,
        required:true
    },
    lastDate:{
        type:String,
        required:true
    }
})

jobSchema.statics.postJob=async function(title,employer,employername,description,location,type,lastDate){
    if(!title || !description || !location || !type || !lastDate)
    throw Error('All fields must be filled!')

    const job=this.create({title,employer,employername,description,location,type,lastDate})

}

module.exports=mongoose.model('Job',jobSchema)