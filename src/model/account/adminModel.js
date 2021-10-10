import bcrypt from "bcrypt";
import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    // Public
    email: { type:String, required:true, unique: true},
    username: { type:String, required: true, unique: true},
    password: { type:String, required: true},
    // Functional
    // age: { type:Number, required: true}, Nope
    job: { type:String, required: true},
    following: { type:Number, required: true, default:0},
    followed: { type:Number, required: true, default:0},
})

adminSchema.pre("save", async function() {
    if(this.isModified("password")) {
        this.password=await bcrypt.hash(this.password, 5);
    }
});

const adminModel=mongoose.model("Admin",adminSchema);

export default adminModel;