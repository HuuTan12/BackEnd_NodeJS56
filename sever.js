// file gốc file chính đều tổng hợp về expressjs, server.js là file chính để khởi tạo và cấu hình server 
// trong ứng dụng Express. Nó thường bao gồm các phần sau:

import express from "express"; // Import thư viện Express
const app = express(); //tạo ứng dụng expres
const port = 3069; // cổng mà sever sẽ lắng nghe các yêu cầu từ client

import rootRouter from "./src/routers/root.routers.js";
// es5: const express = require("express"); // Import thư viện Express
// es6: module

// console.log("đây là app.....>",app)

app.use("/api", rootRouter)




//nằm cuối cùng của file sever.js, app.listen(port, callback) là phương thức được sử dụng để khởi động server và lắng nghe các yêu cầu 
// từ client trên cổng được chỉ định. Khi server bắt đầu lắng nghe, callback function sẽ được gọi, trong đó bạn có thể thực hiện các hành động như ghi log thông báo rằng server đã sẵn sàng.
app.listen(port, () => {
    console.log("Server is running on port 3069");
})