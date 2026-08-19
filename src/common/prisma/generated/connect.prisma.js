import {PrismaMariaDb} from "@prisma/adapter-mariadb"
import {PrismaClient} from "../generated/prisma/client.ts"
import { DATABASE_URL } from "../../constants/app.constants.js"

const url = new URL(DATABASE_URL);

// console.log(url) // In ra thông tin URL để kiểm tra
// console.log(url)



const adapter = new PrismaMariaDb({
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.slice(1),
    port: url.port,
})

const prisma = new PrismaClient({
    adapter,
})

//kiểm tra kết nối với cơ sở dữ liệu bằng Prisma
try {
    await prisma.$queryRaw`SELECT 1 + 1 AS result`
    console.log("Connected to Prisma successfully.")
} catch (error) {
    console.error("Failed to connect to Prisma:", error)
    
}

export {prisma};