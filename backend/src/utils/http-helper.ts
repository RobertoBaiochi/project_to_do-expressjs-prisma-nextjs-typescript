import { HttpHelperModel } from "../models/httpHelperModel";

export const ok = async (data: any): Promise<HttpHelperModel> => {
    return {
        statusCode: 200,
        body: data,
    };
};

export const created = async (): Promise<HttpHelperModel> => {
    return {
        statusCode: 201,
        body: {
            message: "Created Successful",
        },
    };
};

export const noContent = async (): Promise<HttpHelperModel> => {
    return {
        statusCode: 204,
        body: null,
    };
};

export const badRequest = async (
    message?: string
): Promise<HttpHelperModel> => {
    return {
        statusCode: 400,
        body: message ? { message: message } : null,
    };
};

export const unauthorized = async (): Promise<HttpHelperModel> => {
    return {
        statusCode: 401,
        body: null,
    };
};

export const notFound = async (): Promise<HttpHelperModel> => {
    return {
        statusCode: 404,
        body: null,
    };
};

export const serverError = async (): Promise<HttpHelperModel> => {
    return {
        statusCode: 500,
        body: {
            message: "Server error",
        },
    };
};
