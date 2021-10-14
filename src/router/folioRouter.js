import express from "express";

// folio upload
import { autoProfile, uploadGet } from "../controller/folioControllers";
import { uploadPost } from "../controller/folioControllers";
// folio view
import { folioViewGet } from "../controller/folioViewControllers";
import { folioViewPost } from "../controller/folioViewControllers";

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
    .route("/:id")
    .get(folioViewGet)
    .all(loginUserMD)
    .post(upFolioImagesMiddleware.single("folioImage"),folioViewPost);

export default folioRouter;