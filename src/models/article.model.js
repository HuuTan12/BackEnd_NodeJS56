import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";

const Article = sequelize.define(
  "Article", //tên cục bộ sẽ dử dụng trong code services
  {
    //attribute: tên cột trong bảng
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true,
      //giá trị mặc định luôn là true không cần khai báo
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id", //khóa chính của bảng Users
        model: "Users", //tên bảng trong database
      },
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN, // chỉ chứa bao gom 0 và 1
      allowNull: false,
      defaultValue: 0,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: "TIMESTAMP",
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: "TIMESTAMP",
      allowNull: false,
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
      ),
    },
  },
  //options: tên bảng trong database, có thể khác với tên cục bộ
  {
    //code first
    // tableName: "Articles_demo_code_first",

    tableName: "Articles", //db first
    timestamps: false, //tự động thêm 2 cột 
    //createdAt và updatedAt
  },
);
//db first là có bảng sẵn rồi, nhìn kiểu dữ liệu làm liền

//code first tạo bảng trong database nếu chưa tồn tại, nếu đã tồn tại thì bỏ qua
// await Article.sync()  tạo bảng trong database nếu chưa tồn tại

export default Article;
