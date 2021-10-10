export const localsMiddleware=(req,res,next)=>{
    res.locals.loggedIn=Boolean(req.session.loggedIn);
    res.locals.loggedInUser=req.session.user || null;
    res.locals.loggedInAdmin=req.session.admin || null;
    res.locals.loggedInCompany=req.session.company || null;
    next();
};

// User
export const unloginUserMD=(req,res,next)=>{
    // 로그인되어 있지 않으면 Routng 그렇지 않으면 홈으로 백
    // ex) Only unloged broswer can get "/user/login" and "/user/join"
    return !req.session.loggedIn ? next() : res.redirect("/");
};
export const loginUserMD=(req,res,next)=>{
    // 로그인되어 있으면 Routing 그렇지 않으면 Login Get
    // ex) Only logged broswer can get "/user/logout"
    return req.session.loggedIn ? next() : res.redirect("/user/login");
};
// Admin
export const unloginAdminMD=(req,res,next)=>{
    // 로그인되어 있지 않으면 Routing 그렇지 않으면 홈으로 백
    // ex) Only unlogged broswer can get "/admin/login" and "/admin/join"
    return !req.session.loggedIn ? next() : res.redirect("/admin/");
}
export const loginAdminMD=(req,res,next)=>{
    // 로그인되어 있으면 Routing 그렇지 않으면 Login Get
    // ex) Only logged broswer can get "/admin/logout"
    return req.session.loggedIn ? next() : res.redirect("/user/login");
}
// Company
export const unloginCompanyMD=(req,res,next)=>{
    // 로그인되어 있지 않으면 Routing 그렇지 않으면 홈으로 백
    // ex) Only unlogged broswer can get "/company/login" and "/company/join"
    return !req.session.loggedIn ? next() : res.redirect("/company/");
}
export const loginCompanyMD=(req,res,next)=>{
    // 로그인되어 있으면 Routing 그렇지 않으면 Login Get
    // ex) Only logged broswer can get "/company/logout"
    return req.session.loggedIn ? next() : res.redirect("/company/login");
}