import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import { localsMiddleware } from "./middleware";

import globalRouter from "./router/globalRouter";

import userRouter from "./router/userRouter";
import adminRouter from "./router/adminRouter";
import companyRouter from "./router/companyRouter";

import folioRouter from "./router/folioRouter";

const app=express();
const morganLogger=morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/view");
app.use(morganLogger);
app.use(express.urlencoded({extended:true}));

app.use(
    session ({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 7 * 24 * 3600 * 1000 },
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
);
app.use(localsMiddleware);

// Router
app.use("/",globalRouter);
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/company",companyRouter);
// Router
app.use("/folio",folioRouter);
// Frontend
app.use("/static", express.static("assets"));
// Uploads Files
app.use("/uploads", express.static("uploads"));

export default app;