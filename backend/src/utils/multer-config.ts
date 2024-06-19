import { NextFunction, Request, Response } from "express";
import multer from "multer";
import path from "path";
import * as HttpResponse from "./http-helper";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, path.resolve("uploads"));
    },
    filename(req, file, callback) {
        const user_id = req.user_id;
        callback(
            null,
            `${user_id}_${Date.now()}_${path.extname(file.originalname)}`
        );
    },
});

export const uploadFiles = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg"
        ) {
            callback(null, true);
        } else {
            callback(
                new Error(
                    "Only JPEG and PNG files are allowed or max size 1024px"
                )
            );
        }
    },
    limits: {
        fileSize: 3000000,
    },
}).single("file");

export const handleFileUploadError = async (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let response = null;

    if (error instanceof multer.MulterError) {
        response = await HttpResponse.badRequest(
            "Only image like JPG, JPEG and PNG files are allowed or max size 1024px"
        );

        res.status(response.statusCode).json(response.body);
    } else {
        next();
    }
};
