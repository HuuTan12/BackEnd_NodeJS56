import express from "express";

import { articleController } from "../controllers/article.controllers.js";

 const articleRouter = express.Router();

//(req,res, next) => {} là middleware function, nó được sử dụng 
// để xử lý các yêu cầu trước khi chúng được chuyển đến controller. 
// next để kiểm tra xong đi quia lớp khác
articleRouter.get(
    "/",
    
    articleController.findAll);
    

export default articleRouter;