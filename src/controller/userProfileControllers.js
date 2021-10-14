import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import bcrypt from "bcrypt";

import userModel from "../model/account/userModel";
import folioModel from "../model/folio/folioModel";

const renSetup=[
    {
        Title: "프로필 열람",
        Message: "해당 프로필을 열람하였습니다."
    },
    {
        Title: "프로필 수정",
        Message: "해당 프로필을 수정하고 있습니다."
    },
];

// View Profile + little Edit Profile
export const profileGet=async(req,res)=>{
    // try{
        const { id }=req.params;

        const userDB=await userModel.findById(id).populate("folioArray");
        const followingLength=userDB.followingNameArray.length;
        const followedLength=userDB.followedNameArray.length;
        return res.render("template/user/profile", {
            Title: renSetup[0].Title,
            Message: renSetup[0].Message,
            addTitle:"addTitle",
            userDB,
            followingLength,
            followedLength,
        });
    // } catch {
    //     return res.redirect("/");
    // };
};
export const profilePost=async(req,res)=>{
    try{
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
        };
    } catch(error){
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
    };
};

// Edit Profile
export const profileEditGet=async(req,res)=>{
    try{
        const {
            params:{ id }, // profile ID
            session:{ user:{ _id } }, // user ID
        }=req;

        // Validation of ID
        if(id!==_id) {
            return res.redirect(`/user/profile/${id}`);
        };

        const userDB=await userModel.findById({_id}).populate("folioArray");
        if(!userDB) {
            return res.redirect(`/user/profile/${id}`);
        };

        renSetup[1].Message=(userDB.folioArray.length===0) ?
            "프로젝트가 없습니다." : `${userDB.folioArray.length} 개의 프로젝트가 있습니다.`;
        
        return res.render("template/user/edit", {
            Title: renSetup[1].Title,
            Message: renSetup[1].Message,
            addTitle:"addTitle",
            userDB 
        });
    } catch {
        
    }
};
export const profileEditPost=async(req,res)=>{
        const {
            session:{ user:{ _id, accountEditCount, accountPasswordCount, password }}
        }=req;
        const userDB=await userModel.findById(_id).populate("folioArray");
        console.log(userDB);
        console.log(req.body);
        // console.log(req.body.password);
        if(!userDB) {
            return res.redirect(`/user/profile/${id}`);
        }
        renSetup[1].Message=(userDB.folioArray.length===0) ?
            "프로젝트가 없습니다." : `${userDB.folioArray.length} 개의 프로젝트가 있습니다.`;

        if(req.body.old_password===undefined){ // Type 1 : basic data edit
            const {
                body:{ email, username, age, major, statusNow, accountDescription }
            }=req;

            let userExists;
            if(userDB.email!==email){
                if (userDB.username!==username) { // Validation Check need
                    userExists=await userModel.exists({ $or: [{email, username}]});
                    if(userExists) {
                        return res.status(400).render("template/user/edit", {
                            Title: renSetup[1].Title,
                            Message: renSetup[1].Message,
                            addTitle:"addTitle",
                            userDB,
                            error:"이미 사용중인 이메일, 유저이름입니다."
                        });
                    }
                    userDB.email=email;
                    userDB.username=username;
                    userDB.accountEditCount=accountEditCount+1;
                } else { // Validation Check need
                    userExists=await userModel.exists({ email });
                    if(userExists){
                        return res.status(400).render("template/user/edit", {
                            Title: renSetup[1].Title,
                            Message: renSetup[1].Message,
                            addTitle:"addTitle",
                            userDB,
                            error:"이미 사용중인 이메일입니다."
                        });
                    }
                    userDB.email=email;
                    userDB.accountEditCount=accountEditCount+1;
                }
            } else {
                if (userDB.username!==username) { // Validation Check need
                    userExists=await userModel.exists({ username });
                    if(userExists){
                        return res.status(400).render("template/user/edit", {
                            Title: renSetup[1].Title,
                            Message: renSetup[1].Message,
                            addTitle:"addTitle",
                            userDB,
                            error:"이미 사용중인 유저이름입니다."
                        });
                    }
                    userDB.username=username;
                    userDB.accountEditCount=accountEditCount+1;
                } else { // Validation Check don't need
                }
            }
            userDB.age=age;
            userDB.major=major;
            userDB.statusNow=statusNow;
            userDB.accountDescription=accountDescription;
            await userDB.save();
            req.session.user=userDB;

            return res.redirect(`/user/profile/${_id}`);
        } else { // Type 2 : password data edit
            console.log("비밀 번호 수정");
            if(accountPasswordCount>=3){
                return res.redirect(`/user/profile/${_id}`);
            }
            const {
                body: { old_password, new_password, new_password2 }
            }=req;

            if(new_password!==new_password2) {
                return res.status(400).render("template/user/edit", {
                    Title: renSetup[1].Title,
                    Message: renSetup[1].Message,
                    addTitle:"addTitle",
                    userDB,
                    error:"새 비밀번호가 서로 다릅니다."
                });
            };

            const passwordCheck=await bcrypt.compare(old_password, password);
            if(!passwordCheck) {
                return res.status(400).render("template/user/edit", {
                    Title: renSetup[1].Title,
                    Message: renSetup[1].Message,
                    addTitle:"addTitle",
                    userDB,
                    error:"비밀번호가 틀렸습니다."
                });
            };

            userDB.password=new_password;
            userDB.accountPasswordCount=accountPasswordCount+1;
            await userDB.save();
            req.session.user=userDB;

            return res.redirect(`/user/profile/${_id}`);
        };
};