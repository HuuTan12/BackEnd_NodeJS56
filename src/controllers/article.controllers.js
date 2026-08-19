import { responseSuccess } from "../common/helpers/response.helpers.js";
import { articleServices } from "../services/article.services.js";

export const articleController = {
  async findAll(req, res) {
    // điều hướng đến service để xử lý nghiệp vụ
    const result = await articleServices.findAll(req, res);
    const response = responseSuccess( "Lấy danh sách thành công", result);
    // trả dữ liệu client
    res.json(response);
  },
};
