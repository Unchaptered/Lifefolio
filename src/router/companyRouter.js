import express from "express";

import { joinGet, loginGet, logout } from "../controller/companyControllers";
import { joinPost, loginPost } from "../controller/companyControllers";

const companyRouter=express.Router();

companyRouter
    .route("/");

companyRouter
    .route("/join")
    .get(joinGet)
    .post(joinPost);

companyRouter
    .route("/login")
    .get(loginGet)
    .post(loginPost);

companyRouter
    .route("/logout")
    .get(logout);

export default companyRouter;