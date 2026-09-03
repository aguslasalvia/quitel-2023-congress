import { Request, Response, NextFunction } from "express";
import {
  findPreRegistrationByEmail,
  createPreRegistration as createPreRegistrationService,
} from "../services/pre-registration.service";

// Search if exist registratio
export const searchExistenPreRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;
  const data = await findPreRegistrationByEmail(email);
  if (data) {
    next();
  } else {
    res.status(404).json({ message: "No existe registro" });
  }
};

// Create pre-registration
export const createPreRegistration = async (req: Request, res: Response) => {
  await createPreRegistrationService(req.body);
  res.status(201).json({ message: "success" });
};
