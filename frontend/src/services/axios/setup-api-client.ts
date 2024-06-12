import axios, { AxiosError } from "axios";
import { AuthTokenError } from "./errors/auth-token-error";
import Cookie from "js-cookie";

export const setupApiClient = () => {
    let token = Cookie.get("token");

    // instanciando o axios com valores padrões
    const api = axios.create({
        baseURL: "http://localhost:3333/api",
    });

    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    // garante que por padrão e de forma global cada requisição tenha essa config
    if (token) {
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
    }

    /*
        O interceptor funciona como um middleware que vai ser chamado antes do
        THEN e CATCH da respostas, ele recebe 2 callback como parâmetros:
        1- Direcionar o que será feito com a RESPOSTA.
        2- Tratamento de erros.
    */
    api.interceptors.response.use(
        (response) => {
            /*
                Qualquer código com status no intervalo de 2xx
                aciona essa função
            */
            return response;
        },
        (error: AxiosError) => {
            /*
                Qualquer código fora do intervalo de 2xx
                aciona essa função
            */

            if (error.response?.status === 401) {
                /*
                    Qualquer erro 401 (Não autorizado caí aqui).
                    Verificando se o que está sendo executado no client-side ou server-side
                */

                if (typeof window !== undefined) {
                    Cookie.remove("token");
                } else {
                    return Promise.reject(new AuthTokenError());
                }
            }

            return;
        }
    );

    return api;
};
