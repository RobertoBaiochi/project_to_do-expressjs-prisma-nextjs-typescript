"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/utils/multer-config.ts
var multer_config_exports = {};
__export(multer_config_exports, {
  handleFileUploadError: () => handleFileUploadError,
  uploadFiles: () => uploadFiles
});
module.exports = __toCommonJS(multer_config_exports);
var import_multer = __toESM(require("multer"));
var import_path = __toESM(require("path"));

// src/utils/http-helper.ts
var badRequest = (message) => __async(void 0, null, function* () {
  return {
    statusCode: 400,
    body: message ? { message } : null
  };
});

// src/utils/multer-config.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handleFileUploadError,
  uploadFiles
});
