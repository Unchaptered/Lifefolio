import mongoose from "mongoose";

const folioSchema=new mongoose.Schema({
    // Basic Data
    sort: { type:String, required:true, default:"folio" },
    folioName: { type:String, reqruied:true, default:"unamed" },
    shortcutUrl: { type:String, default:"image" },
    shortcutView: { type:Boolean, default:false }, //true 일 시, Grid 노출
    // Meta Data
    folioCreated:  { type:Date, required:true, default:Date.now },
    folioDescription: { type:String },
    // Master(Owner) Data
    master: { type: mongoose.Schema.Types.ObjectId, requried: true, ref: "User" },
    masterName: { type:String, required:true },
    // FolioImages Data
    folioImageArray: [
        { type:mongoose.Schema.Types.ObjectId, ref: "FolioImage" },
    ],
    folioImageNameArray: [
        { type:String }
    ],
});

const folioModel=mongoose.model("Folio",folioSchema);

export default folioModel;