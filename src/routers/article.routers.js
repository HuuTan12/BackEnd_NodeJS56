import express from "express";

import { articleController } from "../controllers/article.controllers.js";

 const articleRouter = express.Router();

//(req,res, next) => {} là middleware function, nó được sử dụng 
// để xử lý các yêu cầu trước khi chúng được chuyển đến controller. 
// next để kiểm tra xong đi quia lớp khác
articleRouter.get(
    "/",
    //middleware function
    //next để đi tiếp
    (req,res,next)=> {
        console.log("middle 1" )
        next();
    },
    (req,res,next)=> {
        console.log("middle 2" )
        next();
    },
    (req,res,next)=> {
        console.log("middle 3" )
        next();
    },
    (req,res,next)=> {
        console.log("middle 4" )
        next();
    },
    articleController.findAll);
    

export default articleRouter;