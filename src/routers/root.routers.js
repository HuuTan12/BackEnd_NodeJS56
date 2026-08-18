import express from "express"
import articleRouter from "./article.routers.js"

//Router là một đối tượng trong Express.js được sử dụng để quản lý các tuyến đường (routes) của ứng dụng. Nó cho phép bạn nhóm các tuyến đường liên quan lại với nhau, 
// giúp tổ chức mã nguồn và làm cho ứng dụng dễ bảo trì hơn. Router có thể được sử dụng để định nghĩa các tuyến đường cho các phần khác nhau của ứng dụng, chẳng hạn như API, trang web, hoặc các module riêng biệt.

const rootRouter = express.Router()

// điều hướng về model con
rootRouter.use("/article",articleRouter)



export default rootRouter