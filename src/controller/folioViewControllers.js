import userModel from "../model/account/userModel";

import folioModel from "../model/folio/folioModel";
import folioImageModel from "../model/folio/folioImageModel";

const renSetup=[
    {
        Title: "title",
        Message: "description"
    },
];

export const folioViewGet=async(req,res)=>{
    try{
        const { id }=req.params;

        const folioDB=await folioModel.findById({_id:id}).populate("folioImageArray");

        console.log(folioDB);
        renSetup[0].Title=folioDB.folioName;
        renSetup[0].Message=(String(folioDB.folioDescription)==="") ?
            " " : folioDB.folioDescription;

        return res.render("template/folio/folio-view", {
            Title: renSetup[0].Title,
            Message: renSetup[0].Message,
            folioDB,
            addTitle:"addTitle",
        });
    } catch(error) {
        return res.redirect("/");
    }
};
export const folioViewPost=async(req,res)=>{
    try{
        const {
            body:{ target, submit },
            session:{ user:{ _id }},
            params: { id }
        }=req;

        // FInd Folio Master
        const folioDB=await folioModel.findById({_id:id});
        const userDB=await userModel.findById({_id:folioDB.master});
        // Vallidation Users
        if(_id !== String(folioDB.master._id)){ //not-accessed
            return res.redirect("/");
        } else {
            const folioImageDB=await folioImageModel.create({
                imageName:target,
                master:userDB._id,
                masterName:String(userDB.useranme),
                masterFolio:folioDB._id,
                masterFolioName:String(folioDB.folioName),
            });
            folioDB.folioImageArray.push(folioImageDB._id);
            folioDB.folioImageNameArray.push(folioImageDB.imageName);
            userDB.folioImageArray.push(folioImageDB._id);
            userDB.folioImageNameArray.push(folioImageDB.imageName);
            folioDB.save();
            userDB.save();
        }
        return res.redirect(`/folio/${id}`);
    } catch(error){
        return res.redirect("/");
    }
};