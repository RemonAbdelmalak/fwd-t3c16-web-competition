import { Request, Response, NextFunction } from "express";
import Watch_listmodel from "../models/watch_list.models";

const watchlist = new Watch_listmodel();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await watchlist.create(req.body);
    res.json({
      status: "success",
      data: { ...user },
      message: "Watch list Created Successfully",
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
    const user = await watchlist.getOne(req.params.id as unknown as string);
    res.json({
      status: "success",
      data: user,
      message: "User retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getmany = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await watchlist.getcheck();
    res.json({
      status: "success",
      data: users,
      message: "Users retrieved successfully",
    });
  } catch (err) {
    next(err);
  }
};
