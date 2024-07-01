import { Router } from "express";
import { createUserController } from "./controllers/user/create-user-controller";
import { getAllUsersController } from "./controllers/user/get-all-users-controller";
import { authUserController } from "./controllers/user/auth-user-controller";
import { isAuthenticated } from "./middlewares/is-authenticated";
import { detailsUserController } from "./controllers/user/details-user-controller";
import { updateUserController } from "./controllers/user/patch-user-controller";
import { deleteUserController } from "./controllers/user/delete-user-controller";
import { createTaskController } from "./controllers/task/create-task-controller";
import { getAllTaskUserController } from "./controllers/task/get-all-task-user-controller";
import { getTaskByIdController } from "./controllers/task/get-task-by-id-controller";
import { updateTaskController } from "./controllers/task/update-task-controller";
import { deleteTaskController } from "./controllers/task/delete-task-controller";
import { updateStatusTaskController } from "./controllers/task/update-status-task-controller";
import { handleFileUploadError, uploadFiles } from "./utils/multer-config";
import { createAvatarController } from "./controllers/user/create-avatar-controller";
import { getTasksDoneController } from "./controllers/task/get-tasks-done-status-controller";
import { getTasksDoingController } from "./controllers/task/get-tasks-doing-status-controller";
import { getTasksTodoController } from "./controllers/task/get-tasks-todo-status-controller";
import { updateTaskIndexController } from "./controllers/task/update-index-task-controller";
import { updateAvatarController } from "./controllers/avatar/update-avatar-controller";
import { getAvatarByIdController } from "./controllers/avatar/get-avatar-by-id-controller";

const route = Router();

// Users
route.get("/user", getAllUsersController);
route.post("/create/user", createUserController);
route.post("/login/user", authUserController);
route.get("/me", isAuthenticated, detailsUserController);
route.patch("/user/:id", isAuthenticated, updateUserController);
route.delete("/user/", isAuthenticated, deleteUserController);

// Tasks
route.post("/task", isAuthenticated, createTaskController);
route.get("/task", isAuthenticated, getAllTaskUserController);
route.get("/task/:id", isAuthenticated, getTaskByIdController);
route.patch("/task/:id", isAuthenticated, updateTaskController);
route.delete("/task/:id", isAuthenticated, deleteTaskController);
route.patch("/taskstatus/:id", isAuthenticated, updateStatusTaskController);
route.get("/todo/task", isAuthenticated, getTasksTodoController);
route.get("/doing/task", isAuthenticated, getTasksDoingController);
route.get("/done/task", isAuthenticated, getTasksDoneController);
route.patch("/index/task/:id", isAuthenticated, updateTaskIndexController);

// Avatar
route.post(
    "/upload",
    isAuthenticated,
    uploadFiles,
    handleFileUploadError,
    createAvatarController
);
route.patch(
    "/upload/:id",
    isAuthenticated,
    uploadFiles,
    handleFileUploadError,
    updateAvatarController
);

route.get("/avatar/:id", isAuthenticated, getAvatarByIdController);

export default route;
