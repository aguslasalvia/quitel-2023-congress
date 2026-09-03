import { Register } from "../models/registration.model";

export const findRegistrationByEmail = (email: string) => {
  return Register.findOne({ email });
};

export const createRegistration = (data: any) => {
  const newRegistration = new Register(data);
  return newRegistration.save();
};
