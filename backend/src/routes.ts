import { Router } from "express";
import { createUserController } from "./controllers/user/create-user-controller";
import { getAllUsersController } from "./controllers/user/get-all-users-controller";
import { authUserController } from "./controllers/user/auth-user-controller";
import { isAuthenticated } from "./middlewares/is-authenticated";
import { detailsUserController } from "./controllers/user/details-user-controller";
import { updateUserController } from "./controllers/user/patch-user-controller";
import { deleteUserController } from "./controllers/user/delete-user-controller";

const route = Router();

route.get("/user", getAllUsersController);
route.post("/create/user", createUserController);
route.post("/login/user", authUserController);
route.get("/me", isAuthenticated, detailsUserController);
route.get("/user/:id", isAuthenticated, updateUserController);
route.delete("/user/:id", isAuthenticated, deleteUserController);

export default route;
