"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError,
      PrismaClientUnknownRequestError,
      PrismaClientRustPanicError,
      PrismaClientInitializationError,
      PrismaClientValidationError,
      NotFoundError,
      getPrismaClient,
      sqltag,
      empty,
      join,
      raw,
      Decimal,
      Debug,
      objectEnumValues,
      makeStrictEnum,
      Extensions,
      warnOnce,
      defineDmmfProperty,
      Public,
      getRuntime
    } = require("@prisma/client/runtime/library.js");
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.15.0",
      engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
    Prisma.PrismaClientValidationError = PrismaClientValidationError;
    Prisma.NotFoundError = NotFoundError;
    Prisma.Decimal = Decimal;
    Prisma.sql = sqltag;
    Prisma.empty = empty;
    Prisma.join = join;
    Prisma.raw = raw;
    Prisma.validator = Public.validator;
    Prisma.getExtensionContext = Extensions.getExtensionContext;
    Prisma.defineExtension = Extensions.defineExtension;
    Prisma.DbNull = objectEnumValues.instances.DbNull;
    Prisma.JsonNull = objectEnumValues.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues.classes.DbNull,
      JsonNull: objectEnumValues.classes.JsonNull,
      AnyNull: objectEnumValues.classes.AnyNull
    };
    var path2 = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name",
      password: "password"
    };
    exports2.Prisma.TaskScalarFieldEnum = {
      id: "id",
      title: "title",
      description: "description",
      status: "status",
      index: "index",
      userId: "userId"
    };
    exports2.Prisma.AvatarScalarFieldEnum = {
      id: "id",
      pathname: "pathname",
      userId: "userId"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.TaskStatus = exports2.$Enums.TaskStatus = {
      TODO: "TODO",
      DOING: "DOING",
      DONE: "DONE"
    };
    exports2.Prisma.ModelName = {
      User: "User",
      Task: "Task",
      Avatar: "Avatar"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\rober\\OneDrive\\Documentos\\work\\projeto-bee_done\\backend\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "5.15.0",
      "engineVersion": "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": true,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       String  @id @default(uuid())\n  email    String  @unique\n  name     String?\n  password String\n  task     Task[]\n  avatar   Avatar?\n\n  @@map("user")\n}\n\nmodel Task {\n  id          String     @id @default(uuid())\n  title       String     @db.VarChar(80)\n  description String?\n  status      TaskStatus @default(TODO)\n  index       Int        @default(autoincrement())\n  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId      String\n\n  @@map("task")\n}\n\nmodel Avatar {\n  id       String @id @default(uuid())\n  pathname String\n  user     User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId   String @unique\n\n  @@map("avatar")\n}\n\nenum TaskStatus {\n  TODO\n  DOING\n  DONE\n}\n',
      "inlineSchemaHash": "27a05d6d490fe2a0f10f2a1bdf5480bbbd7c8d0e1fa78fca90cc070c0ddb2be3",
      "copyEngine": true
    };
    var fs = require("fs");
    config.dirname = __dirname;
    var _a;
    if (!fs.existsSync(path2.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = (_a = alternativePaths.find((altPath) => {
        return fs.existsSync(path2.join(process.cwd(), altPath, "schema.prisma"));
      })) != null ? _a : alternativePaths[0];
      config.dirname = path2.join(process.cwd(), alternativePath);
      config.isBundled = true;
    }
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"user","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"task","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Task","relationName":"TaskToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"avatar","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Avatar","relationName":"AvatarToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Task":{"dbName":"task","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"TaskStatus","default":"TODO","isGenerated":false,"isUpdatedAt":false},{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"TaskToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Avatar":{"dbName":"avatar","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"pathname","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"AvatarToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"TaskStatus":{"values":[{"name":"TODO","dbName":null},{"name":"DOING","dbName":null},{"name":"DONE","dbName":null}],"dbName":null}},"types":{}}');
    defineDmmfProperty(exports2.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    var { warnEnvConflicts } = require("@prisma/client/runtime/library.js");
    warnEnvConflicts({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path2.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path2.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient(config);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path2.join(__dirname, "query_engine-windows.dll.node");
    path2.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
    path2.join(__dirname, "schema.prisma");
    path2.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// src/app.ts
var import_express2 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// src/routes.ts
var import_express = require("express");

// src/utils/prisma-client.ts
var import_client = __toESM(require_client());
var prismaClient = new import_client.PrismaClient();
var prisma_client_default = prismaClient;

// src/respositories/user/create-avatar-repository.ts
var createAvatarRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.avatar.create({
    data: {
      pathname: "http://localhost:3333/avatar/default.svg",
      userId
    }
  });
  return data;
});

// src/respositories/user/create-user-repository.ts
var createUserRepository = (email, hashpPassword) => __async(void 0, null, function* () {
  const userDefault = (email == null ? void 0 : email.split("@")[0]) || "";
  const user = yield prisma_client_default.user.create({
    data: {
      email,
      password: hashpPassword,
      name: userDefault
    }
  });
  yield createAvatarRepository(user.id);
  return user;
});

// src/respositories/user/find-user-by-email.ts
var findUserByEmail = (email) => __async(void 0, null, function* () {
  const user = yield prisma_client_default.user.findFirst({
    where: {
      email
    }
  });
  return user;
});

// src/utils/http-helper.ts
var ok = (data) => __async(void 0, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var created = () => __async(void 0, null, function* () {
  return {
    statusCode: 201,
    body: {
      message: "Created Successful"
    }
  };
});
var noContent = () => __async(void 0, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var badRequest = (message) => __async(void 0, null, function* () {
  return {
    statusCode: 400,
    body: message ? { message } : null
  };
});
var unauthorized = () => __async(void 0, null, function* () {
  return {
    statusCode: 401,
    body: null
  };
});
var serverError = () => __async(void 0, null, function* () {
  return {
    statusCode: 500,
    body: {
      message: "Server error"
    }
  };
});

// src/services/user/create-user-service.ts
var import_bcrypt = require("bcrypt");
var createUserService = (userData) => __async(void 0, null, function* () {
  let response = null;
  try {
    const { email, password } = userData;
    if (!email || !password) {
      return badRequest("All fields must be filled.");
    }
    const userExist = yield findUserByEmail(email);
    if (userExist) {
      response = yield badRequest(
        "This user is already registered."
      );
      return response;
    }
    const hashPassword = yield (0, import_bcrypt.hash)(password, 12);
    const user = yield createUserRepository(email, hashPassword);
    if (!user) {
      response = yield serverError();
      return response;
    }
    response = yield created();
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/create-user-controller.ts
var createUserController = (req, res) => __async(void 0, null, function* () {
  const bodyContent = req.body;
  const httpResponse = yield createUserService(bodyContent);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/user/get-all-users-repository.ts
var getAllUsersRepository = () => __async(void 0, null, function* () {
  const data = yield prisma_client_default.user.findMany({
    select: {
      id: true,
      email: true,
      password: true
    }
  });
  return data;
});

// src/services/user/get-all-users-service.ts
var getAllUsersService = () => __async(void 0, null, function* () {
  let response = null;
  try {
    const data = yield getAllUsersRepository();
    if (data.length === 0) {
      response = yield noContent();
      return response;
    }
    response = yield ok(data);
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/get-all-users-controller.ts
var getAllUsersController = (req, res) => __async(void 0, null, function* () {
  const httpResponse = yield getAllUsersService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/services/user/auth-user-service.ts
var import_bcrypt2 = require("bcrypt");
var import_jsonwebtoken = require("jsonwebtoken");
var authUserService = (contentBody) => __async(void 0, null, function* () {
  let response = null;
  try {
    const { email, password } = contentBody;
    if (!email || !password) {
      response = yield badRequest(
        "All fields must be filled"
      );
      return response;
    }
    const user = yield findUserByEmail(email);
    if (!user) {
      response = yield badRequest("User not found");
      return response;
    }
    const matchPassword = yield (0, import_bcrypt2.compare)(password, user.password);
    if (!matchPassword) {
      response = yield badRequest("Email or password wrong");
      return response;
    }
    const token = (0, import_jsonwebtoken.sign)(
      {
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d"
      }
    );
    const loginResponse = {
      id: user.id,
      email: user.email,
      token
    };
    response = yield ok(loginResponse);
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/auth-user-controller.ts
var authUserController = (req, res) => __async(void 0, null, function* () {
  const contentBody = req.body;
  const httpResponse = yield authUserService(contentBody);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/middlewares/is-authenticated.ts
var import_jsonwebtoken2 = require("jsonwebtoken");
var isAuthenticated = (req, res, next) => __async(void 0, null, function* () {
  const authToken = req.headers.authorization;
  let response = null;
  try {
    if (!authToken) {
      response = yield unauthorized();
      res.status(response.statusCode).end();
      return;
    }
    const [, token] = authToken.split(" ");
    const { sub } = (0, import_jsonwebtoken2.verify)(token, process.env.JWT_SECRET);
    req.user_id = sub;
    return next();
  } catch (err) {
    response = yield unauthorized();
    res.status(response.statusCode).end();
    return;
  }
});

// src/respositories/user/get-user-by-id-repository.ts
var getUserByIdRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.user.findUnique({
    where: {
      id: userId
    },
    select: {
      id: true,
      email: true,
      password: true,
      avatar: true,
      name: true,
      task: true
    }
  });
  return data;
});

// src/services/user/details-user-service.ts
var detailsUserService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const user = yield getUserByIdRepository(userId);
    if (!user) {
      response = yield unauthorized();
      return response;
    }
    response = yield ok(user);
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/details-user-controller.ts
var detailsUserController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield detailsUserService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/user/patch-user-repository.ts
var updateUserRepository = (userId, name) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.user.update({
    where: {
      id: userId
    },
    data: {
      name
    }
  });
  return data;
});

// src/services/user/patch-user-service.ts
var updateUserService = (userId, bodyContent) => __async(void 0, null, function* () {
  let response = null;
  try {
    const { name } = bodyContent;
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const userExist = yield getUserByIdRepository(userId);
    if (!userExist) {
      response = yield badRequest(
        "This user does not exist."
      );
      return response;
    }
    if (!name) {
      response = yield noContent();
      return response;
    }
    const data = yield updateUserRepository(userId, name);
    if (!data) {
      response = yield serverError();
      return response;
    }
    response = yield ok({ message: "Updated successful." });
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/patch-user-controller.ts
var updateUserController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const bodyContent = req.body;
  const httpResponse = yield updateUserService(userId, bodyContent);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/user/delete-user-repository.ts
var deleteUserRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.user.delete({
    where: {
      id: userId
    },
    include: {
      task: {
        where: {
          userId
        }
      },
      avatar: {
        where: {
          userId
        }
      }
    }
  });
  return data;
});

// src/services/user/delete-user-service.ts
var deleteUserService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const userExist = yield getUserByIdRepository(userId);
    if (!userExist) {
      response = yield badRequest(
        "This user does not exist."
      );
      return response;
    }
    const isDelete = yield deleteUserRepository(userId);
    if (!isDelete) {
      response = yield serverError();
      return response;
    }
    response = yield ok({
      message: "Deleted successful"
    });
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/delete-user-controller.ts
var deleteUserController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield deleteUserService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/create-task-repository.ts
var createTaskRepository = (userId, title) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.create({
    data: {
      title,
      userId
    }
  });
  return data;
});

// src/services/task/create-task-service.ts
var createTaskService = (userId, taskContent) => __async(void 0, null, function* () {
  let response = null;
  try {
    const { title } = taskContent;
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    if (!title) {
      response = yield badRequest(
        "The title must be filled in"
      );
      return response;
    }
    const data = yield createTaskRepository(userId, title);
    if (!data) {
      response = yield serverError();
      return response;
    }
    response = yield created();
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/create-task-controller.ts
var createTaskController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const taskContent = req.body;
  const httpResponse = yield createTaskService(userId, taskContent);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/get-all-task-user-repository.ts
var getAllTaskUserRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.findMany({
    where: {
      userId
    },
    select: {
      id: true,
      title: true,
      status: true,
      index: true
    }
  });
  return data;
});

// src/services/task/get-all-task-user-service.ts
var getAllTaskUserService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const tasks = yield getAllTaskUserRepository(userId);
    if (tasks.length === 0) {
      response = yield noContent();
      return response;
    }
    response = yield ok(tasks);
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/get-all-task-user-controller.ts
var getAllTaskUserController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield getAllTaskUserService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/get-task-by-id-repository.ts
var getTaskByIdRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.findFirst({
    where: {
      id: userId
    },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      index: true
    }
  });
  return data;
});

// src/services/task/get-task-by-id-service.ts
var getTaskByIdService = (taskId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!taskId) {
      response = yield badRequest("Missing task ID.");
      return response;
    }
    const data = yield getTaskByIdRepository(taskId);
    if (!data) {
      response = yield noContent();
      return response;
    }
    response = yield ok(data);
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/get-task-by-id-controller.ts
var getTaskByIdController = (req, res) => __async(void 0, null, function* () {
  const taskId = req.params.id;
  const httpResponse = yield getTaskByIdService(taskId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/update-task-repository.ts
var updateTaskRepository = (taskId, taskData) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.update({
    where: {
      id: taskId
    },
    data: {
      title: taskData.title,
      description: taskData.description
    }
  });
  return data;
});

// src/services/task/update-task-service.ts
var updateTaskService = (taskId, taskData) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!taskId) {
      response = yield badRequest("Missing task ID.");
      return response;
    }
    if (!taskData.title) {
      response = yield badRequest(
        "The title must be filled in."
      );
      return response;
    }
    const data = yield updateTaskRepository(taskId, taskData);
    if (!data) {
      response = yield serverError();
      return response;
    }
    response = yield ok({ message: "Updated successful" });
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/update-task-controller.ts
var updateTaskController = (req, res) => __async(void 0, null, function* () {
  const taskId = req.params.id;
  const taskData = req.body;
  const httpResponse = yield updateTaskService(taskId, taskData);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/delete-task-repository.ts
var deleteTaskRepository = (taskId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.delete({
    where: {
      id: taskId
    }
  });
  return data;
});

// src/services/task/delete-task-service.ts
var deleteTaskService = (taskId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!taskId) {
      response = yield badRequest("Missing task ID.");
      return response;
    }
    const taskExist = yield getTaskByIdRepository(taskId);
    if (!taskExist) {
      response = yield badRequest("Task don't find.");
      return response;
    }
    const isDeleted = yield deleteTaskRepository(taskId);
    if (!isDeleted) {
      response = yield serverError();
      return response;
    }
    response = yield ok({ message: "Deleted successful." });
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/delete-task-controller.ts
var deleteTaskController = (req, res) => __async(void 0, null, function* () {
  const taskId = req.params.id;
  const httpResponse = yield deleteTaskService(taskId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/update-status-task-repository.ts
var updateStatusTaskRepository = (taskId, status) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.updateMany({
    where: {
      id: taskId
    },
    data: {
      status
    }
  });
  return data;
});

// src/services/task/update-status-task-service.ts
var updateStatusTaskService = (taskId, TaskStatusIndexModel) => __async(void 0, null, function* () {
  let response = null;
  try {
    let { status } = TaskStatusIndexModel;
    if (!taskId) {
      response = yield badRequest("Missing task ID.");
      return response;
    }
    const data = yield updateStatusTaskRepository(taskId, status);
    if (!data) {
      response = yield serverError();
      return response;
    }
    response = yield ok({ message: "Status updated." });
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/update-status-task-controller.ts
var updateStatusTaskController = (req, res) => __async(void 0, null, function* () {
  const taskId = req.params.id;
  const statusEnum = req.body;
  const httpResponse = yield updateStatusTaskService(taskId, statusEnum);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/utils/multer-config.ts
var import_multer = __toESM(require("multer"));
var import_path = __toESM(require("path"));
var storage = import_multer.default.diskStorage({
  destination(req, file, callback) {
    callback(null, import_path.default.resolve("uploads"));
  },
  filename(req, file, callback) {
    const user_id = req.user_id;
    callback(
      null,
      `${user_id}_${Date.now()}_${import_path.default.extname(file.originalname)}`
    );
  }
});
var uploadFiles = (0, import_multer.default)({
  storage,
  fileFilter: function(req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
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
    fileSize: 3e6
  }
}).single("file");
var handleFileUploadError = (error, req, res, next) => __async(void 0, null, function* () {
  let response = null;
  if (error instanceof import_multer.default.MulterError) {
    response = yield badRequest(
      "Only image like JPG, JPEG and PNG files are allowed or max size 1024px"
    );
    res.status(response.statusCode).json(response.body);
  } else {
    next();
  }
});

// src/services/user/create-avatar-service.ts
var createAvatarService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const data = yield createAvatarRepository(userId);
    if (!data) {
      response = yield serverError();
      return response;
    }
    response = yield created();
    return response;
  } catch (err) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/user/create-avatar-controller.ts
var createAvatarController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield createAvatarService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/get-tasks-done-status-repository.ts
var getTasksDoneRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.findMany({
    where: {
      userId,
      status: "DONE"
    },
    orderBy: {
      index: "asc"
    }
  });
  return data;
});

// src/services/task/get-tasks-done-status-service.ts
var getTasksDoneService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const data = yield getTasksDoneRepository(userId);
    if (data.length === 0) {
      response = yield noContent();
      return response;
    }
    response = yield ok(data);
    return response;
  } catch (e) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/get-tasks-done-status-controller.ts
var getTasksDoneController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield getTasksDoneService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/get-tasks-doing-status-repository.ts
var getTasksDoingRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.findMany({
    where: {
      userId,
      status: "DOING"
    },
    orderBy: {
      index: "asc"
    }
  });
  return data;
});

// src/services/task/get-tasks-doing-status-service.ts
var getTasksDoingService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const data = yield getTasksDoingRepository(userId);
    if (data.length === 0) {
      response = yield noContent();
      return response;
    }
    response = yield ok(data);
    return response;
  } catch (e) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/get-tasks-doing-status-controller.ts
var getTasksDoingController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield getTasksDoingService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/get-tasks-todo-status-repository.ts
var getTasksTodoRepository = (userId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.findMany({
    where: {
      userId,
      status: "TODO"
    },
    orderBy: {
      index: "asc"
    }
  });
  return data;
});

// src/services/task/get-tasks-todo-status-service.ts
var getTasksTodoService = (userId) => __async(void 0, null, function* () {
  let response = null;
  try {
    if (!userId) {
      response = yield unauthorized();
      return response;
    }
    const data = yield getTasksTodoRepository(userId);
    if (data.length === 0) {
      response = yield noContent();
      return response;
    }
    response = yield ok(data);
    return response;
  } catch (e) {
    response = yield serverError();
    return response;
  }
});

// src/controllers/task/get-tasks-todo-status-controller.ts
var getTasksTodoController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const httpResponse = yield getTasksTodoService(userId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/task/update-index-task-repository.ts
var updateTaskIndexRepository = (taskId, taskIndex) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.task.updateMany({
    where: {
      id: taskId
    },
    data: {
      index: taskIndex
    }
  });
  return data;
});

// src/services/task/update-index-task-service.ts
var updateTaskIndexService = (taskId, taskIndex) => __async(void 0, null, function* () {
  let response = null;
  if (!taskId || !taskIndex) {
    response = yield noContent();
    return response;
  }
  const data = yield updateTaskIndexRepository(taskId, taskIndex);
  if (!data) {
    response = yield serverError();
    return response;
  }
  response = yield ok({ message: "Index updated successful." });
  return response;
});

// src/controllers/task/update-index-task-controller.ts
var updateTaskIndexController = (req, res) => __async(void 0, null, function* () {
  const taskId = req.params.id;
  const taskIndex = req.body.index;
  const httpResponse = yield updateTaskIndexService(taskId, taskIndex);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/user/update-avatar-repository.ts
var updateAvatarRepository = (userId, avatarId, filename) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.avatar.update({
    where: {
      id: avatarId,
      userId
    },
    data: {
      pathname: `http://localhost:3333/avatar/${filename}`
    }
  });
  return data;
});

// src/services/user/update-avatar-service.ts
var updateAvatarService = (userId, avatarId, filename) => __async(void 0, null, function* () {
  let response = null;
  if (!userId) {
    response = yield unauthorized();
    return response;
  }
  if (!avatarId) {
    response = yield badRequest(
      "Avatar ID necessary for update."
    );
    return response;
  }
  if (!filename) {
    response = yield noContent();
    return response;
  }
  const data = yield updateAvatarRepository(userId, avatarId, filename);
  if (!data) {
    response = yield serverError();
    return response;
  }
  response = yield ok({ message: "Update Successful" });
  return response;
});

// src/controllers/user/update-avatar-controller.ts
var updateAvatarController = (req, res) => __async(void 0, null, function* () {
  var _a;
  const userId = req.user_id;
  const avatarId = req.params.id;
  const filename = (_a = req.file) == null ? void 0 : _a.filename;
  const httpResponse = yield updateAvatarService(userId, avatarId, filename);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/respositories/avatar/get-avatar-by-id-repository.ts
var getAvatarByIdRepository = (userId, avatarId) => __async(void 0, null, function* () {
  const data = yield prisma_client_default.avatar.findFirst({
    where: {
      id: avatarId,
      userId
    },
    select: {
      pathname: true
    }
  });
  return data;
});

// src/services/avatar/get-avatar-by-id-service.ts
var getAvatarByIdService = (userId, avatarId) => __async(void 0, null, function* () {
  let response = null;
  if (!userId) {
    response = yield unauthorized();
    return response;
  }
  if (!avatarId) {
    response = yield badRequest("Avatar Id is required");
    return response;
  }
  const data = yield getAvatarByIdRepository(userId, avatarId);
  if (!data) {
    response = yield serverError();
    return response;
  }
  response = yield ok(data);
  return response;
});

// src/controllers/avatar/get-avatar-by-id-controller.ts
var getAvatarByIdController = (req, res) => __async(void 0, null, function* () {
  const userId = req.user_id;
  const avatarId = req.params.id;
  const httpResponse = yield getAvatarByIdService(userId, avatarId);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/routes.ts
var route = (0, import_express.Router)();
route.get("/user", getAllUsersController);
route.post("/create/user", createUserController);
route.post("/login/user", authUserController);
route.get("/me", isAuthenticated, detailsUserController);
route.patch("/user/:id", isAuthenticated, updateUserController);
route.delete("/user/", isAuthenticated, deleteUserController);
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
var routes_default = route;

// src/app.ts
var createApp = () => {
  const app2 = (0, import_express2.default)();
  app2.use(import_express2.default.json());
  app2.use((0, import_cors.default)());
  app2.use("/api", routes_default);
  app2.use("/avatar", import_express2.default.static("uploads"));
  return app2;
};
var app_default = createApp;

// src/server.ts
var app = app_default();
var port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`\u{1F525} Server running in http://localhost:${port}`);
});
