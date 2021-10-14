import express from "express";

import { joinGet, loginGet } from "../controller/userControllers";
import { joinPost, loginPost, logout } from "../controller/userControllers";

import { follow } from "../controller/userFollowControllers";

import { profileGet, profileEditGet } from "../controller/userProfileControllers";
import { profilePost, profileEditPost } from "../controller/userProfileControllers";
// Middleware
import { unloginUserMD, loginUserMD, upUserAvatarMiddleware } from "../middleware";

const userRouter=express.Router();

userRouter
    .route("/");
// Tester@gmail.com
// TesterUsername


userRouter
    .route("/join")
    .all(unloginUserMD)
    .get(joinGet)
    .post(upUserAvatarMiddleware.single("avatar"),joinPost);

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
    .route("/profile/:id/edit")
    .all(loginUserMD)
    .get(profileEditGet)
    .post(profileEditPost);

userRouter
    .route("/profile/:id/follow")
    .all(loginUserMD)
    .get(follow);


export default userRouter;