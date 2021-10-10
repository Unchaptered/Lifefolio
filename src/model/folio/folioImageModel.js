import mongoose from "mongoose";

const folioImageSchema=new mongoose.Schema({
    sort: { type:String, required:true, default:"folioImage" },
    // shortcut: { type:String, required:true, default:"image" },
    imageName: { type:String, reqruied:true, default:"unamed" },
    imageCreated:  { type:Date, required:true, default:Date.now },

    master: { type:mongoose.Schema.Types.ObjectId, requried:true, ref: "User" },
    masterName: { type:String, required:true },

    masterFolio: { type:mongoose.Schema.Types.ObjectId, reqruied:true, ref: "Folio" },
    masterFolioName: { type:String, required:true },
})

const folioImageModel=mongoose.model("FolioImage",folioImageSchema);

export default folioImageModel;