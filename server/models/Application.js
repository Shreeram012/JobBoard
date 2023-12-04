const mongoose=require('mongoose')
const Schema=mongoose.Schema

const applicationSchema= new Schema({
    candidate:{
        type:String
    },
    job:{
        type:Schema.Types.ObjectId,
        ref:'Job'
    },
    about:{
        type:String
    },
    resume:{
        type:String
    }
})

module.exports=mongoose.model('Application',applicationSchema)