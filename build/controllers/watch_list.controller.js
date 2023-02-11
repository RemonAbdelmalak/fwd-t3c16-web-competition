"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmany = exports.getOne = exports.create = void 0;
const watch_list_models_1 = __importDefault(require("../models/watch_list.models"));
const watchlist = new watch_list_models_1.default();
const create = async (req, res, next) => {
    try {
        const user = await watchlist.create(req.body);
        res.json({
            status: "success",
            data: { ...user },
            message: "Watch list Created Successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.create = create;
const getOne = async (req, res, next) => {
    try {
        const user = await watchlist.getOne(req.params.id);
        res.json({
            status: "success",
            data: user,
            message: "User retrieved successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
exports.getOne = getOne;
const getmany = async (_, res, next) => {
    try {
        const users = await watchlist.getcheck();
        res.json({
            status: "success",
            data: users,
            message: "Users retrieved successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
exports.getmany = getmany;
