"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.getMany = exports.getOne = exports.create = void 0;
const user_models_1 = __importDefault(require("../models/user.models"));
const userModel = new user_models_1.default();
const create = async (req, res, next) => {
    try {
        const user = await userModel.create(req.body);
        res.json({
            status: "success",
            data: { ...user },
            message: "User Created Successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.create = create;
const getOne = async (req, res, next) => {
    try {
        const user = await userModel.getOne(req.params.id);
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
const getMany = async (_, res, next) => {
    try {
        const users = await userModel.getMany();
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
exports.getMany = getMany;
const updateOne = async (req, res, next) => {
    try {
        const user = await userModel.updateOne(req.body, req.params.id);
        res.json({
            status: "success",
            data: user,
            message: "User updated successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateOne = updateOne;
const deleteOne = async (req, res, next) => {
    try {
        const user = await userModel.deleteOne(req.params.id);
        res.json({
            status: "success",
            data: user,
            message: "User deleted successfully",
        });
    }
    catch (err) {
        next(err);
    }
};
exports.deleteOne = deleteOne;
