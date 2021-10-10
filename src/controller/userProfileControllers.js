import userModel from "../model/account/userModel";
import folioModel from "../model/folio/folioModel";

const renSetup=[
    {
        Title: "프로필 열람",
        Message: "해당 프로필을 열람하였습니다."
    },
];

export const profileGet=async(req,res)=>{
    try{
        const { id }=req.params;

        const userDB=await userModel.findById(id).populate("folioArray").populate("folioImageArray");
        
        console.log(userDB);
        // console.log(userDB.folioArray[0]);
        return res.render("template/user/profile", {
            Title: renSetup[0].Title,
            Message: renSetup[0].Message,
            userDB,
            addTitle:"addTitle"
        });
    } catch {
        return res.redirect("/");
    }
}

export const profilePost=async(req,res)=>{
    try {
        const {
            params: { id },
            body: { accountDescription },
        }=req;
        
        console.log(req.body);

        if (accountDescription==="") {
            return res.redirect(`/user/profile/${id}`);
        } else { // Success
            const userDB=await userModel.findById(id);
            // Update DB
            userDB.accountDescription=accountDescription;
            await userDB.save();
            // Update Session
            req.session.user.accountDescription=accountDescription;

            return res.redirect(`/user/profile/${id}`);
        }
    } catch(error) {
        const {
            id
        }=req.params;
        
        const userDB=await userModel.findById(id);
        
        return res.render("template/user/profile", {
            Title: renSetup[0].Title,
            Message: renSetup[0].Message,
            userDB,
            error,
            addTitle:"addTitle",
        });
    }
}