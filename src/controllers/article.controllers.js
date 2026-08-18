import { articleServices } from "../services/article.services.js";

export const articleController = {
    
   async findAll(req, res) {
        // điều hướng đến service để xử lý nghiệp vụ
        const result =await articleServices.findAll(req, res);

        // trả dữ liệu client
        res.json(result);
    }

    
}