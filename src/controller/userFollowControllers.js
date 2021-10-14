import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import userModel from "../model/account/userModel";

const renSetup=[
    {
        Title: "회원가입",
        Message: "무료 회원가입으로 포트폴리오를 생성해보세요!",
    },
];


export const follow=async(req,res)=>{
    try{
        const {
            session:{ user:{ _id }}, //유저
            params:{ id } // 팔로우대상
        }=req;

        if(_id===id){
            return res.status(400).redirect(`/user/profile/${id}`);
        };

        const userDB=await userModel.findById({_id});
        if(!userDB){
            return res.status(400).redirect(`/user/profile/${id}`);
        };

        const userFollow=await userModel.findById({_id:id});
        if(!userFollow){
            return res.status(400).redirect(`/user/profile/${id}`);
        };

        if(userDB.followingNameArray.includes(userFollow.username)){
            return res.status(400).redirect(`/user/profile/${id}`);
        }

        userDB.followingArray.push(userFollow._id);
        userDB.followingNameArray.push(userFollow.username);
        await userDB.save();

        userFollow.followedArray.push(userDB._id);
        userFollow.followedNameArray.push(userDB.username);
        await userFollow.save();
        
        return res.redirect(`/user/profile/${id}`);
    } catch(error) {
        return res.redirect("/");
    }
};