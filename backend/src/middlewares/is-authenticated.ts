import { NextFunction, Request, Response } from "express";
import * as HttpResponse from "../utils/http-helper";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export const isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authToken = req.headers.authorization;
    let httpResponse = null;
    try {
        if (!authToken) {
            httpResponse = await HttpResponse.unauthorized();
            res.status(httpResponse.statusCode).end();
            return;
        }

        const [, token] = authToken.split(" ");

        const { sub } = verify(token, process.env.JWT_SECRET!) as Payload;

        req.user_id = sub;

        return next();
    } catch (err) {
        httpResponse = await HttpResponse.unauthorized();
        res.status(httpResponse.statusCode).end();
        return;
    }
};
