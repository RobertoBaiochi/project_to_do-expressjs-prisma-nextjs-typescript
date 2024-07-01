import express from "express";
import cors from "cors";
import route from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use("/api", route);
    app.use("/avatar", express.static("uploads"));
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    return app;
};

export default createApp;
