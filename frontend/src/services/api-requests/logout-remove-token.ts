import Cookies from "js-cookie";

export function logoutRemoveToken() {
    Cookies.remove("token");
}
