import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import bcrypt from "bcrypt";

import companyModel from "../model/account/companyModel";

const renSetup=[
    {
        Title: "비즈니스 가입",
        Message: "비즈니스 계정은 별도의 인증 과정 이후 사용할 수 있습니다."
    },
    {
        Title: "비즈니스 로그인",
        Message: "비즈니스 계정은 별도의 인증 과정 이후 사용할 수 있습니다."
    },
];

export const joinGet=(req,res)=>{
    return res.render("template/company/join", {
        Title: renSetup[0].Title,
        Message: renSetup[0].Message,
    });
}
export const joinPost=async(req,res)=>{
    try{
        const { username, email, password, password2, job }=req.body;

        if(password!==password2) { // 비밀번호 불일치
            return res.render("template/company/join", {
                Title: renSetup[0].Title,
                Message: renSetup[0].Message,
                error: "비밀번호가 서로 다릅니다.",
                username, email, job
            });
        }

        const companyExists=await companyModel.findOne({ $or: [{ username }, { email }] });
        if(companyExists) { // 사용 중인 아이디
            const nameVali=Boolean(String(userExists.username) === username);
            const emailVali=Boolean(String(userExists.email) === email);
            let companyCheck="";
            if(nameVali) {
                if(emailVali) { companyCheck="유저 이름과 이메일이 중복입니다.";
                    return res.render("template/company/join", {
                        Title: renSetup[0].Title,
                        Message: renSetup[0].Message,
                        error: companyCheck,
                        job
                    });
                }
                companyCheck="유저 이름이 중복입니다.";
                return res.render("template/company/join", {
                    Title: renSetup[0].Title,
                    Message: renSetup[0].Message,
                    error: companyCheck,
                    job, companyname
                });
            } else { companyCheck="이메일이 중복입니다.";
                return res.render("template/company/join", {
                    Title: renSetup[0].Title,
                    Message: renSetup[0].Message,
                    error: companyCheck,
                    job, companyname
                });
            }
        }

        await companyModel.create({ username, email, password, job });

        return res.redirect("/company/login");
    } catch(error) {
        return res.status(400).redirect("/compnay/join");
    }
}
export const loginGet=(req,res)=>{
    return res.render("template/company/login", {
        Title: renSetup[1].Title,
        Message: renSetup[1].Message,
    });
}
export const loginPost=async(req,res)=>{
    try{
        const { username, password }=req.body;

        const companyDB=username.includes("@") ?
            await companyModel.findOne({ email:username }) :
            await companyModel.findOne({ username });
        if(companyDB===null) {
            return res.render("template/company/login", {
                Title: renSetup[1].Title,
                Message: renSetup[1].Message,
                error: "존재하지 않는 아이디입니다."
            });
        }

        const passwordCheck=await bcrypt.compare(password, companyDB.password);
        if(!passwordCheck) { // 비밀번호 불일치
            return res.render("template/company/login", {
                Title: renSetup[1].Title,
                Message: renSetup[1].Message,
                error: "올바르지 않은 비밀번호입니다.",
                username
            });
        }

        
        req.session.loggedIn=true;
        req.session.company=companyDB;

        console.log(req.session);
        return res.redirect("/");
    } catch(error) {
        return res.status(400).redirect("/company/login");
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