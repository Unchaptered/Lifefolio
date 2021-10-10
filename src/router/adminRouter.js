import express from "express";

import { joinGet, loginGet, logout } from "../controller/adminControllers";
import { joinPost, loginPost } from "../controller/adminControllers";

import { unloginAdminMD, loginAdminMD } from "../middleware";
const adminRouter=express.Router();

adminRouter
    .route("/");

adminRouter
    .route("/join")
    .all(unloginAdminMD)
    .get(joinGet)
    .post(joinPost);

adminRouter
    .route("/login")
    .all(unloginAdminMD)
    .get(loginGet)
    .post(loginPost);

adminRouter
    .route("/logout")
    .all(loginAdminMD)
    .get(logout);

export default adminRouter;