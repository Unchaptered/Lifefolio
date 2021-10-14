import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import bcrypt from "bcrypt";

import userModel from "../model/account/userModel";

const renSetup=[
    {
        Title: "회원가입",
        Message: "무료 회원가입으로 포트폴리오를 생성해보세요!",
    },
    {
        Title: "로그인",
        Message: "아이디와 비밀번호를 입력해주세요."
    },
];

// Join
export const joinGet=(req,res)=>{
    return res.render("template/user/join", {
        Title: renSetup[0].Title,
        Message: renSetup[0].Message,
    });
};
export const joinPost=async(req,res)=>{
    try{
        const {
            file: { path: avatarUrl },
            body: { username, email, password, password2, age, major, statusNow }
        }=req;
        // Validation password === password2
        if(password!==password2) { // 비밀번호 불일치
            return res.render("template/user/join", {
                Title: renSetup[0].Title,
                Message: renSetup[0].Message,
                error: "비밀번호가 서로 다릅니다.",
                username, email, age, major
            });
        };
        // Validation to unique
        const userExists=await userModel.findOne({ $or: [{ username }, { email }] });
        if(userExists) { // 사용 중인 아이디
            const nameVali=Boolean(String(userExists.username) === username);
            const emailVali=Boolean(String(userExists.email) === email);
            let userCheck="";
            if(nameVali) {
                if(emailVali) { userCheck="유저 이름과 이메일이 중복입니다.";
                    return res.render("template/user/join", {
                        Title: renSetup[0].Title,
                        Message: renSetup[0].Message,
                        error: userCheck,
                        age, major
                    });
                };
                userCheck="유저 이름이 중복입니다.";
                return res.render("template/user/join", {
                    Title: renSetup[0].Title,
                    Message: renSetup[0].Message,
                    error: userCheck,
                    age, major, email
                });
            } else { userCheck="이메일이 중복입니다.";
                return res.render("template/user/join", {
                    Title: renSetup[0].Title,
                    Message: renSetup[0].Message,
                    error: userCheck,
                    age, major, username
                });
            };
        };
        await userModel.create({ username, email, password, age, major, statusNow, avatarUrl });

        return res.redirect("/user/login");
    } catch (error) {
        return res.status(400).redirect("/user/join");
    };
};

// Login
export const loginGet=(req,res)=>{
    return res.render("template/user/login", {
        Title: renSetup[1].Title,
        Message: renSetup[1].Message,
    });
};
export const loginPost=async(req,res)=>{
    try {
        const { username, password }=req.body;

        const userDB=username.includes("@") ?
            await userModel.findOne({ email:username }) :
            await userModel.findOne({ username }); // null 또는 객체 반환
        if(userDB===null) { // 아이디 미존재
            return res.render("template/user/login", {
                Title: renSetup[1].Title,
                Message: renSetup[1].Message,
                error: "존재하지 않는 아이디입니다."
            });
        };

        const passwordCheck=await bcrypt.compare(password, userDB.password);
        if(!passwordCheck) { // 비밀번호 불일치
            return res.render("template/user/login", {
                Title: renSetup[1].Title,
                Message: renSetup[1].Message,
                error: "올바르지 않은 비밀번호입니다.",
                username
            });
        };

        req.session.loggedIn=true;
        req.session.user=userDB;

        console.log(req.session);
        return res.redirect("/");
    } catch(error) {
        return res.status(400).redirect("/user/login");
    };
};

// Logout
export const logout=async(req,res)=>{
    try{ 
        await req.session.destroy();
        return res.redirect("/");
    } catch(error) {
        return res.status(400).redirect("/");
    }
};