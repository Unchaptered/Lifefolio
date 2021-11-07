import mongoose, { mongo } from "mongoose";

const folioImageSchema=new mongoose.Schema({
    sort: { type:String, required:true, default:"folioImage" },
    // Basic Data
    folioImageName: { type:String, reqruied:true, default:"untitled" },
    folioImageUrl: { type:String, required:true, default:"none" },
    // Meta Dta
    imageCreated:  { type:Date, required:true, default:Date.now },

    // Maser(Owner) Data
    master: { type:mongoose.Schema.Types.ObjectId, requried:true, ref: "User" },
    masterName: { type:String, required:true },
    masterMajor: { type:Number, required: true, default:15 },
    masterStatusNow: { type:Number, required:true , default:0},
    // Master Folio Data
    masterFolio: { type:mongoose.Schema.Types.ObjectId, reqruied:true, ref: "Folio" },
    masterFolioName: { type:String, required:true },
    masterFolioMajor: { type:Number, required: true, default:15 },
    masterFolioStatusNow: { type:Number, required:true , default:0},
    // Attention
    likedUserArray: [{ type:mongoose.Schema.Types.ObjectId, ref: "User" }],
    likedUserNameArray: [{ type:String }]
});

const folioImageModel=mongoose.model("FolioImage",folioImageSchema);

export default folioImageModel;