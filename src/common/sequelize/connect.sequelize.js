import { Sequelize } from "sequelize";

//tạo kết nối tới db
const sequelize = new Sequelize("mysql://root:tanduyen111@localhost:3307/NodeJS_56")

//kiểm tra kết nối
try {
  await sequelize.authenticate();
  console.log('[Sequelize] Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;