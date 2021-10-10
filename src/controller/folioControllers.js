import folioModel from "../model/folio/folioModel";
import userModel from "../model/account/userModel";

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

export const uploadPost=async(req,res)=>{
    const {
        session: { user: { _id } },
        body: { folioName, folioDescription }
    }=req;

    const userDB=await userModel.findById({_id});

    const folioDB=await folioModel.create({
        folioName, folioDescription,
        master:_id, masterName:userDB.username
    });

    userDB.folioArray.push(folioDB._id);
    userDB.folioNameArray.push(folioDB.folioName);
    userDB.save();

    return res.redirect(`/user/profile/${_id}`);
};