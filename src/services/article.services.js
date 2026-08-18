import sequelize from "../common/sequelize/connect.sequelize.js";
import Article from "../models/article.model.js";

export const articleServices = {
  // thực hiện logic trả về contrôller
  async findAll(req, res) {
    // xử lí nghiệp vụ
    // sequelize
    // return "list article nha các tình yêu ơi";
    const result = await Article.findAll();
    return result;
  },
};
