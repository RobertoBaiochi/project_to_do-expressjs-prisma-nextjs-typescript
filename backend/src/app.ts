import express from "express";
import cors from "cors";
import route from "./routes";

const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.use("/api", route);
    app.use("/avatar", express.static("uploads"));

    return app;
};

export default createApp;
