import { Request, Response, NextFunction } from "express";
import {
  findRegistrationByEmail,
  createRegistration as createRegistrationService,
} from "../services/registration.service";

export const searchExistenRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;
  const data = await findRegistrationByEmail(email);
  if (!data) next();
  else res.status(404).json({ message: "Already Registered" });
};

export const createRegistration = async (req: Request, res: Response) => {
  await createRegistrationService(req.body);
  res.status(201).json({ message: "success" });
};
