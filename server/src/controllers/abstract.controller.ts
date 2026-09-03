import { Request, Response, NextFunction } from "express";
import {
  createAbstract as createAbstractService,
  uploadAbstractFiles as uploadAbstractFilesService,
} from "../services/abstract.service";

export const createAbstract = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await createAbstractService(req.body);
  next();
};

export const uploadAbstractFiles = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await uploadAbstractFilesService(req.files);
  next();
};
