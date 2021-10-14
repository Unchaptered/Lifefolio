import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import userModel from "../model/account/userModel";
import folioModel from "../model/folio/folioModel";

const renSetup=[
    {
        Title: "새 포트폴리오 생성하기",
        Message: "포트폴리오 생성하시오"
    },
];

export const autoProfile=(req,res)=>{
    try {
        const {_id}=req.session.user;

        return res.redirect(`/user/profile/${_id}`);
    } catch(error){
        return res.redirect("/user/login");
    }
};
export const uploadGet=(req,res)=>{
    return res.render("template/folio/folio-upload", {
        Title: renSetup[0].Title,
        Message: renSetup[0].Message,
    });
};

/* 경우의 수
    Cover Upload
    Cover Not Upload
*/
export const uploadPost=async(req,res)=>{
    try{
        const {
            session:{ user:{ _id } },
            body: { folioName, folioDescription }
        }=req;

        const userDB=await userModel.findById({_id});

        let folioDB;
        if(req.file===undefined){
            // console.log("file is undefined");
            folioDB=await folioModel.create({
                // Baisc Data
                folioName,
                // Meta Data
                folioDescription, 
                // Master(owner) Data
                master:_id,
                masterName:userDB.username
            })
        } else {
            // console.log("file isn't undefined");
            const{ path:shortcutUrl }=req.file;
            folioDB=await folioModel.create({
                // Baisc Data
                folioName,
                shortcutUrl,
                shortcutView:true,
                // Meta Data
                folioDescription, 
                // Master(owner) Data
                master:_id,
                masterName:userDB.username
            });
        }
        userDB.folioArray.push(folioDB._id);
        userDB.folioNameArray.push(folioDB.folioName);
        await userDB.save();

        return res.redirect(`/user/profile/${_id}`);
    } catch(error){
        return res.redirect("/");
    };
};