import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

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
        const { folioID:id }=req.params;

        const folioDB=await folioModel.findById({_id:id}).populate("folioImageArray");
        // console.log(folioDB.folioImageArray.likedUserArray);
        
        renSetup[0].Title=folioDB.folioName;
        renSetup[0].Message=(String(folioDB.folioDescription)==="") ?
            " " : folioDB.folioDescription;

        // console.log(folioDB);
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

/* 경우의 수
    Image Upload
    Image Not Upload
*/
export const folioViewPost=async(req,res)=>{
    // try{
        const { folioID:id }=req.params;

        if(req.file===undefined){
            // console.log("Image File isn't uploaded");
            return res.redirect(`/folio/${id}`);
        } else {
            // console.log("Image File is successfully uploaded");
            const {
                file:{ path:folioImageUrl },
                session:{ user:{ _id }},
                body:{ folioImageName, submit, major, statusNow },
            }=req;

            const folioDB=await folioModel.findById({_id:id});
            if(!folioDB){
                return res.redirect("/");
            }
            const userDB=await userModel.findById({_id:folioDB.master});
            if(!userDB){
                return res.redirect("/");
            }

            const folioImageDB=await folioImageModel.create({
                // Basic Data
                folioImageName,
                folioImageUrl,

                // Master(Owner) & Master Folio Data
                master:userDB._id,
                masterName:String(userDB.username),
                masterFolio:folioDB._id,
                masterFolioName:String(folioDB.folioName),
                masterMajor:major,
                masterStatusNow:statusNow,
                masterFolioMajor:major,
                masterFolioStatusNow:statusNow,
            })
            // console.log(folioImageDB);
            folioDB.folioImageArray.push(folioImageDB._id);
            folioDB.folioImageNameArray.push(String(folioImageDB.imageName));
            folioDB.save();
            userDB.folioImageArray.push(folioImageDB._id);
            userDB.folioImageNameArray.push(String(folioImageDB.imageName));
            userDB.save();
            
            return res.redirect(`/folio/${id}`);
        }
    // } catch(error){
    //     return res.redirect("/");
    // }
};