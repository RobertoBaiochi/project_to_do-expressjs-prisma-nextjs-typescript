"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/middlewares/is-authenticated.ts
var is_authenticated_exports = {};
__export(is_authenticated_exports, {
  isAuthenticated: () => isAuthenticated
});
module.exports = __toCommonJS(is_authenticated_exports);

// src/utils/http-helper.ts
var unauthorized = () => __async(void 0, null, function* () {
  return {
    statusCode: 401,
    body: null
  };
});

// src/middlewares/is-authenticated.ts
var import_jsonwebtoken = require("jsonwebtoken");
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
    const { sub } = (0, import_jsonwebtoken.verify)(token, process.env.JWT_SECRET);
    req.user_id = sub;
    return next();
  } catch (err) {
    response = yield unauthorized();
    res.status(response.statusCode).end();
    return;
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isAuthenticated
});
