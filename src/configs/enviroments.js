require("dotenv").config();

// To store all the environments variables here.
const Environments = {
    PORT: process.env?.PORT ?? 3000,
    MONGO_URL: process.env.MONGO_URL ?? "mongodb://localhost:27017/demo-billing-system"
}


module.exports = {
    Environments
}