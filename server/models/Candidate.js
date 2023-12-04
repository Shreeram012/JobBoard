const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const Schema=mongoose.Schema

const candidateSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

candidateSchema.statics.signup=async function(username,password,fullname,email){

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

    const candidate=await this.create({username,password:hash,fullname,email})

    return candidate;
}

candidateSchema.statics.login=async function(username,password){

    if(!username || !password){
        throw Error('All fields must be filled!')
    }

    const candidate=await this.findOne({username})

    if(!candidate){
        throw Error('Invalid username')
    }

    const match=await bcrypt.compare(password,candidate.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return candidate;

}

module.exports=mongoose.model('Candidate',candidateSchema)