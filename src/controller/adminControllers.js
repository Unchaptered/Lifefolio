import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import bcrypt from "bcrypt";

import adminModel from "../model/account/adminModel";

const renSetup=[
    {
        Title: "관리자 가입",
        Message: "관리자 계정은 서버 승인 이후 사용할 수 있습니다."
    },
    {
        Title: "관리자 로그인",
        Message: "관리자 계정은 서버 승인 이후 사용할 수 있습니다."
    },
];

export const joinGet=(req,res)=>{
    return res.render("template/admin/join", {
        Title: renSetup[0].Title,
        Message: renSetup[0].Message,
    });
}
export const joinPost=async(req,res)=>{
    try{
        const { username, email, password, password2, job }=req.body;

        if(password!==password2) { // 비밀번호 불일치
            return res.render("template/admin/join", {
                Title: renSetup[0].Title,
                Message: renSetup[0].Message,
                error: "비밀번호가 서로 다릅니다.",
                username, email, job
            });
        }

        const adminExists=await adminModel.findOne({ $or: [{ username }, { email }] });
        if(adminExists) { // 사용 중인 아이디
            const nameVali=Boolean(String(userExists.username) === username);
            const emailVali=Boolean(String(userExists.email) === email);
            let adminCheck="";
            if(nameVali) {
                if(emailVali) { adminCheck="유저 이름과 이메일이 중복입니다.";
                    return res.render("template/admin/join", {
                        Title: renSetup[0].Title,
                        Message: renSetup[0].Message,
                        error: adminCheck,
                        job
                    });
                }
                adminCheck="유저 이름이 중복입니다.";
                return res.render("template/admin/join", {
                    Title: renSetup[0].Title,
                    Message: renSetup[0].Message,
                    error: adminCheck,
                    job, adminname
                });
            } else { adminCheck="이메일이 중복입니다.";
                return res.render("template/admin/join", {
                    Title: renSetup[0].Title,
                    Message: renSetup[0].Message,
                    error: adminCheck,
                    job, adminname
                });
            }
        }

        await adminModel.create({ username, email, password, job });

        return res.redirect("/admin/login");
    } catch(error) {
        return res.status(400).redirect("/admin/join");
    }
}
export const loginGet=(req,res)=>{
    return res.render("template/admin/login", {
        Title: renSetup[1].Title,
        Message: renSetup[1].Message,
    });
}
export const loginPost=async(req,res)=>{
    try{
        const { username, password }=req.body;

        const adminDB=username.includes("@") ?
            await adminModel.findOne({ email:username }) :
            await adminModel.findOne({ username });
        if(adminDB===null) {
            return res.render("template/admin/login", {
                Title: renSetup[1].Title,
                Message: renSetup[1].Message,
                error: "존재하지 않는 아이디입니다."
            });
        }

        const passwordCheck=await bcrypt.compare(password, adminDB.password);
        if(!passwordCheck) { // 비밀번호 불일치
            return res.render("template/admin/login", {
                Title: renSetup[1].Title,
                Message: renSetup[1].Message,
                error: "올바르지 않은 비밀번호입니다.",
                username
            });
        }

        req.session.loggedIn=true;
        req.session.admin=adminDB;

        console.log(req.session);
        return res.redirect("/");
    } catch(error) {
        return res.status(400).redirect("/admin/login");
    }
}
export const logout=async(req,res)=>{
    try{ 
        await req.session.destroy();
        return res.redirect("/");
    } catch (error) {
        return res.status(400).redirect("/");
    }
}