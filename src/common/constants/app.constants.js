import "dotenv/config";

// lấy trong tin trong env
//xong sau đó bóc tách thông tin
export const DATABASE_URL = process.env.DATABASE_URL;

console.log("\n", DATABASE_URL, "\n")