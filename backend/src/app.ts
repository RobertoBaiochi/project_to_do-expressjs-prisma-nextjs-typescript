import express from "express";
import cors from "cors";
import route from "./routes";

const createApp = () => {
    const app = express();

    app.use(express.json());

    app.use("/api", route);
    app.use("/avatar", express.static("uploads"));

    const corsOptions = {
        origin: "*",
    };

    app.use(cors(corsOptions));

    return app;
};

export default createApp;
