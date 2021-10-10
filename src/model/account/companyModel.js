import bcrypt from "bcrypt";
import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
    // Public
    email: { type:String, required:true, unique: true},
    username: { type:String, required: true, unique: true},
    password: { type:String, required: true},
    // Functional
    // age: { type:Number, required: true}, Nope
    job: { type:String, required: true},
    following: { type:Number, required: true, default:0},
    followed: { type:Number, required: true, default:0},
    // Populate
    // 포트폴리오 
    // 포트폴리오 > 프로젝트 > 파일 구조
})

companySchema.pre("save", async function() {
    if(this.isModified("password")) {
        this.password=await bcrypt.hash(this.password, 5);
    }
});

const companyModel=mongoose.model("Company",companySchema);

export default companyModel;