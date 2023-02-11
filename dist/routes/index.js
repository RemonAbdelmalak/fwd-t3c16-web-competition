"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var user_routes_1 = __importDefault(require("./api/user.routes"));
var movie_routes_1 = __importDefault(require("./api/movie.routes"));
var watch_list_routes_1 = __importDefault(require("./api/watch_list.routes"));
var routes = (0, express_1.Router)();
routes.use("/users", user_routes_1["default"]);
routes.use("/movies", movie_routes_1["default"]);
routes.use("/watched", watch_list_routes_1["default"]);
exports["default"] = routes;
