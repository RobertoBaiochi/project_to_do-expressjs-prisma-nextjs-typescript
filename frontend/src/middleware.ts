import { NextRequest, NextResponse } from "next/server";
import { logoutRemoveToken } from "./services/api-requests/logout-remove-token";

export default async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const signInURL = new URL("/conta", request.url);
    const dashboardURL = new URL("/dashboard", request.url);

    // Se a rota é "/dashboard" e não há token, redireciona para a página de login.
    if (!token && request.nextUrl.pathname === "/dashboard") {
        return NextResponse.redirect(signInURL);
    }

    // Se há um token e a rota é "/", redireciona para o dashboard.
    if (
        (token && request.nextUrl.pathname === "/") ||
        (token && request.nextUrl.pathname === "/conta")
    ) {
        return NextResponse.redirect(dashboardURL);
    }

    // Permite o acesso às outras rotas.
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/dashboard", "/conta"],
};
