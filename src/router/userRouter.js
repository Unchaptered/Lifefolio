import express from "express";

import { joinGet, loginGet } from "../controller/userControllers";
import { joinPost, loginPost, logout } from "../controller/userControllers";
import { profileGet, profilePost } from "../controller/userProfileControllers";
// Middleware
import { unloginUserMD, loginUserMD } from "../middleware";

const userRouter=express.Router();

userRouter
    .route("/");

userRouter
    .route("/join")
    .all(unloginUserMD)
    .get(joinGet)
    .post(joinPost);

userRouter
    .route("/login")
    .all(unloginUserMD)
    .get(loginGet)
    .post(loginPost);

userRouter
    .route("/logout")
    .all(loginUserMD)
    .get(logout);

userRouter
    .route("/profile/:id")
    .get(profileGet)
    .post(profilePost);

userRouter
    .route("/profile/:id/edit");

export default userRouter;