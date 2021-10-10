import mongoose from "mongoose";

const folioSchema=new mongoose.Schema({
    sort: { type:String, required:true, default:"folio" },
    // shortcut: { type:String, required:true, default:"image" },
    folioName: { type:String, reqruied:true, default:"unamed" },
    folioCreated:  { type:Date, required:true, default:Date.now },
    folioDescription: { type:String },

    master: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: "User" },
    masterName: { type:String, required:true },
    
    folioImageArray: [
        { type:mongoose.Schema.Types.ObjectId, ref: "FolioImage" },
    ],
    folioImageNameArray: [
        { type:String }
    ],
});

const folioModel=mongoose.model("Folio",folioSchema);

export default folioModel;