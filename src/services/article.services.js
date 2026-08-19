
import Article from "../models/article.model.js";
import {prisma} from "../common/prisma/generated/connect.prisma.js";

//chạy thử kết nối với cơ sở dữ liệu bằng Prisma
prisma

export const articleServices = {
  // thực hiện logic trả về contrôller
  async findAll(req, res) {
    // xử lí nghiệp vụ
    // sequelize
    // return "list article nha các tình yêu ơi";

    // const resultSequelize = await Article.findAll();
    // return resultSequelize;

    const resultPrisma = await prisma.articles.findMany();
    return resultPrisma;

  },
};
