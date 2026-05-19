const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const { string, required } = require("joi");

const adminSchema=new mongoose.Schema({
 username:{
    type:String,
    required:[true,"username required"]
 },
 email:{
    type:String,
    required:[true,"email required"]
 },
 password:{
    type:String,
    required:[true,"password required"],
    minlength:6,
 }
},{timestamps:true}
);

/////لازم تتكتب في السكيما من تحت "في الاخر"

adminSchema.pre("save",async function name(next) {
    if (!this.isModified("password"))return next();
    this.password=await bcrypt.hash(this.password,10);
});
adminSchema.methods.comparePassword=async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword,this.password);
    
}
const Admin=mongoose.model("Admin",adminSchema);
module.exports=Admin;