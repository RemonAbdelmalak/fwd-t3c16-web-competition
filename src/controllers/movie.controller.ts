import { Request, Response, NextFunction } from "express";
import Moviemodel from "../models/movies.models";

const movieModel = new Moviemodel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await movieModel.create(req.body);
    res.json({
      status: "success",
      data: { ...movie },
      message: "Movie Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await movieModel.getOne(req.params.id as unknown as string);
    res.json({
      status: "success",
      data: movie,
      message: "Movie retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getMany = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await movieModel.getMany();
    res.json({
      status: "success",
      data: users,
      message: "Movies retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await movieModel.updateOne(req.body,req.params.id);
    res.json({
      status: "success",
      data: movie,
      message: "Movie updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await movieModel.deleteOne(
      req.params.id as unknown as string
    );
    res.json({
      status: "success",
      data: movie,
      message: "Movie deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
