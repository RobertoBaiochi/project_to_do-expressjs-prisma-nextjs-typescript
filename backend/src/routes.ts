import { Router } from "express";
import { createUserController } from "./controllers/user/create-user-controller";
import { getAllUsersController } from "./controllers/user/get-all-users-controller";
import { authUserController } from "./controllers/user/auth-user-controller";
import { isAuthenticated } from "./middlewares/is-authenticated";
import { detailsUserController } from "./controllers/user/details-user-controller";

const route = Router();

route.get("/user", getAllUsersController);
route.post("/create/user", createUserController);
route.post("/login/user", authUserController);
route.get("/me", isAuthenticated, detailsUserController);

export default route;
