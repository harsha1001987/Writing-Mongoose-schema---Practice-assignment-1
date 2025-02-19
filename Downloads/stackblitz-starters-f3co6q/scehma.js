const mongoose = require('mongoose')
const userschema = new mongoose.schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true,},
    password:{type:String,required:true},
    roles:{type:String,default:[]}
})

const user = mongoose.model('user',userschema)

const profileschema = new mongoose.schema({
    firstname:{type:string},
    lastname:{type:string},
    age:{type:Number}
 })

 const  profile = mongoose.model('profile',mongoose.schema)


 const activitySchema = new mongoose.schema({
    lastlogin:{type:Date}
 })


 