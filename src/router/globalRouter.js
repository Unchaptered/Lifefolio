import express from "express";
import { homeGet, searchGet, searchPost } from "../controller/searchControllers";

const globalRouter=express.Router();

globalRouter
    .route("/")
    .get(homeGet);

globalRouter
    .route("/search")
    .get(searchGet)
    .post(searchPost);

export default globalRouter;