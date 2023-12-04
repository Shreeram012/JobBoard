const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const Schema=mongoose.Schema

const employerSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})

employerSchema.statics.signup=async function(username,password){

    if(!username || !password){
        throw Error('All fields must be filled!')
    }
    if(!validator.matches(username, "^[a-zA-Z0-9_]*$")){
        throw Error('Username is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    const exists=await this.findOne({username})
    if(exists)
        throw Error('username already exists')
    
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const employer=await this.create({username,password:hash})

    return employer;
}

employerSchema.statics.login=async function(username,password){

    if(!username || !password){
        throw Error('All fields must be filled!')
    }

    const employer=await this.findOne({username})

    if(!employer){
        throw Error('Invalid username')
    }

    const match=await bcrypt.compare(password,employer.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return employer;

}

module.exports=mongoose.model('Employer',employerSchema)