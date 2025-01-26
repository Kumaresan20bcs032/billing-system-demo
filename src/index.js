const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const { Environments } = require("./configs/enviroments");
const mongodbConnection = require("./configs/mongoose");
const Router = require("./routes/index");
const { successResponse, errorResponse } = require("./utils/response_handler");

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));



new mongodbConnection();


app.get("/", (req, res) => {
    return successResponse(res, 200, "Application api is working fine.", {});
})

app.use("/api/v1", Router);

app.use("*", (req, res) => {
    return errorResponse(res, 400, "Request route not found.");
})





const PORT = Environments.PORT;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})