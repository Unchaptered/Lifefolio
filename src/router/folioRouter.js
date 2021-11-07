import express from "express";

// folio upload
import { autoProfile, uploadGet } from "../controller/folioControllers";
import { uploadPost } from "../controller/folioControllers";
// folio view
import { folioViewGet } from "../controller/folioViewControllers";
import { folioViewPost } from "../controller/folioViewControllers";

import { folioLike, folioImageLike, folioImageShare, folioImageFollow, folioImageFind } from "../controller/folioLikeController";

import { loginUserMD, upFolioShortcutMiddleware, upFolioImagesMiddleware } from "../middleware";

const folioRouter=express.Router();

folioRouter
    .route("/")
    .all(loginUserMD)
    .get(autoProfile);

folioRouter
    .route("/upload")
    .all(loginUserMD)
    .get(uploadGet)
    .post(upFolioShortcutMiddleware.single("shortcut"),uploadPost);

folioRouter
    .route("/:folioID")
    .get(folioViewGet)
    .all(loginUserMD)
    .post(upFolioImagesMiddleware.single("folioImage"),folioViewPost);

// contains self middleware
folioRouter
    .route("/:folioID/like")
    .get(folioLike);
folioRouter
    .route("/:folioID/:imageID/like")
    .get(folioImageLike);

folioRouter
    .route("/:folioID/:imageID/share")
    .get(folioImageShare);

folioRouter
    .route("/:folioID/:imageID/follow")
    .get(folioImageFollow);

folioRouter
    .route("/image/:imageID/find")
    .get(folioImageFind);
export default folioRouter;