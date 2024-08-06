import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
username:{require:true,unique:true,type:String},
email:{require:true,type:String},
password:{require:true,type:String},
profile:String,
isVerified:{type:Boolean,default:false},
verifyemailotp:String,
otpexp:{type:Date},
resetpassotp:String,
resetpassexpiry:{type:Date},
cart:[],
orders:[],
address:[],
fav:[]

},{timestamps:true})

const User = mongoose.models.users || mongoose.model('users',userSchema)
export default User