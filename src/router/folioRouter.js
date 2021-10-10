import express from "express";

import { loginUserMD } from "../middleware";
// folio upload
import { autoProfile, uploadGet } from "../controller/folioControllers";
import { uploadPost } from "../controller/folioControllers";
// folio view
import { folioViewGet } from "../controller/folioViewControllers";
import { folioViewPost } from "../controller/folioViewControllers";
const folioRouter=express.Router();

folioRouter
    .route("/")
    .all(loginUserMD)
    .get(autoProfile);

folioRouter
    .route("/upload")
    .all(loginUserMD)
    .get(uploadGet)
    .post(uploadPost);

folioRouter
    .route("/:id")
    .get(folioViewGet)
    .all(loginUserMD)
    .post(folioViewPost);

export default folioRouter;