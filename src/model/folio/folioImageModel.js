import mongoose from "mongoose";

const folioImageSchema=new mongoose.Schema({
    sort: { type:String, required:true, default:"folioImage" },
    // Basic Data
    folioImageName: { type:String, reqruied:true, default:"unamed" },
    folioImagesUrl: { type:String, required:true, default:"image" },
    // Meta Dta
    imageCreated:  { type:Date, required:true, default:Date.now },

    // Maser(Owner) Data
    master: { type:mongoose.Schema.Types.ObjectId, requried:true, ref: "User" },
    masterName: { type:String, required:true },
    // Master Folio Data
    masterFolio: { type:mongoose.Schema.Types.ObjectId, reqruied:true, ref: "Folio" },
    masterFolioName: { type:String, required:true },
})

const folioImageModel=mongoose.model("FolioImage",folioImageSchema);

export default folioImageModel;